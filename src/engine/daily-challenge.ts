import { getLanguagesByTiers, type Language } from '../data/languages';

// ── Seeded PRNG (Mulberry32) ──
function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

// ── Date seed ──
export function getDateSeed(dateStr?: string): number {
  const d = dateStr || new Date().toISOString().slice(0, 10);
  return parseInt(d.replace(/-/g, ''), 10);
}

export function getTodayDateStr(): string {
  return new Date().toISOString().slice(0, 10);
}

// ── Daily Challenge Config ──
export const DAILY_CONFIG = {
  roundCount: 7,
  wrongLimit: 3,
  optionCount: 4,
  tiers: [1, 2, 3],
};

// ── Deterministic challenge generation ──
export interface DailyChallenge {
  date: string;
  rounds: DailyRound[];
}

export interface DailyRound {
  langId: string;
  sentenceIndex: number;
  distractorIds: string[];
}

export function generateDailyChallenge(dateStr?: string): DailyChallenge {
  const date = dateStr || getTodayDateStr();
  const seed = getDateSeed(date);
  const rng = mulberry32(seed);

  const eligible = getLanguagesByTiers(DAILY_CONFIG.tiers);
  const rounds: DailyRound[] = [];
  const usedLangIds: string[] = [];

  for (let i = 0; i < DAILY_CONFIG.roundCount; i++) {
    // Pick language (no repeats)
    const available = eligible.filter(l => !usedLangIds.includes(l.id));
    const langIndex = Math.floor(rng() * available.length);
    const lang = available[langIndex];
    usedLangIds.push(lang.id);

    // Pick sentence
    const sentenceIndex = Math.floor(rng() * lang.sentences.length);

    // Pick distractors (from eligible, not the correct answer)
    const distractorPool = eligible.filter(l => l.id !== lang.id);
    const distractors: string[] = [];
    const usedDistractors = new Set<number>();
    while (distractors.length < DAILY_CONFIG.optionCount - 1) {
      const idx = Math.floor(rng() * distractorPool.length);
      if (!usedDistractors.has(idx)) {
        usedDistractors.add(idx);
        distractors.push(distractorPool[idx].id);
      }
    }

    rounds.push({ langId: lang.id, sentenceIndex, distractorIds: distractors });
  }

  return { date, rounds };
}

// ── Scoring ──
export interface DailyScore {
  score: number;       // correct answers (0-7)
  accuracy: number;    // percentage (0-100)
  timeMs: number;      // completion time
  perfect: boolean;    // 7/7
}

export function computeDailyScore(correct: number, wrong: number, timeMs: number): DailyScore {
  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  return {
    score: correct,
    accuracy,
    timeMs,
    perfect: correct === DAILY_CONFIG.roundCount,
  };
}

// ── Share text ──
export function generateShareText(score: DailyScore, date: string): string {
  const timeStr = formatTime(score.timeMs);
  const emoji = score.perfect ? '🏆' : score.score >= 5 ? '⭐' : '🌍';
  return `${emoji} Languess Daily Challenge\n📅 ${date}\n\nScore: ${score.score}/${DAILY_CONFIG.roundCount}\nAccuracy: ${score.accuracy}%\nTime: ${timeStr}\n\nCan you beat me?\nhttps://globe-guess-languages1.pages.dev`;
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

// ── Local storage for daily results ──
const DAILY_KEY = 'languess_daily_v1';

export interface DailyState {
  date: string;
  completed: boolean;
  score: number;
  accuracy: number;
  timeMs: number;
  streak: number;
  bestStreak: number;
  bestScore: number;
  bestTimeMs: number | null;
  history: Record<string, { score: number; timeMs: number }>;
}

function defaultDailyState(): DailyState {
  return {
    date: '', completed: false, score: 0, accuracy: 0, timeMs: 0,
    streak: 0, bestStreak: 0, bestScore: 0, bestTimeMs: null, history: {},
  };
}

export function loadDailyState(): DailyState {
  try {
    const raw = localStorage.getItem(DAILY_KEY);
    return raw ? { ...defaultDailyState(), ...JSON.parse(raw) } : defaultDailyState();
  } catch { return defaultDailyState(); }
}

export function saveDailyResult(score: DailyScore): DailyState {
  const state = loadDailyState();
  const today = getTodayDateStr();

  // Only save if better than existing today's result
  if (state.date === today && state.completed && score.score <= state.score) {
    if (score.score === state.score && score.timeMs >= state.timeMs) {
      return state; // Not an improvement
    }
  }

  // Update streak
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  const isConsecutive = state.date === yesterday || (state.date === today && state.streak > 0);
  const newStreak = state.date === today ? state.streak : (isConsecutive ? state.streak + 1 : 1);

  const updated: DailyState = {
    date: today,
    completed: true,
    score: score.score,
    accuracy: score.accuracy,
    timeMs: score.timeMs,
    streak: newStreak,
    bestStreak: Math.max(state.bestStreak, newStreak),
    bestScore: Math.max(state.bestScore, score.score),
    bestTimeMs: state.bestTimeMs === null ? score.timeMs : Math.min(state.bestTimeMs, score.timeMs),
    history: { ...state.history, [today]: { score: score.score, timeMs: score.timeMs } },
  };

  localStorage.setItem(DAILY_KEY, JSON.stringify(updated));
  return updated;
}

export function hasTodayResult(): boolean {
  const state = loadDailyState();
  return state.date === getTodayDateStr() && state.completed;
}
