import { type Language, getLanguageById, getLanguagesByTiers } from '../data/languages';
import { getItem, setItem, removeItem } from '../lib/stats-adapter';

// ── Difficulty Configuration ──
export interface DifficultyConfig {
  tiers: number[];
  winTarget: number;
  wrongLimit: number;
  optionCount: number;
  inputType: 'buttons' | 'text';
  showHint: boolean;
  recencyPenaltyRounds: number;
}

export const DIFFICULTIES: Record<string, DifficultyConfig> = {
  easy:   { tiers: [1, 2], winTarget: 5,  wrongLimit: 3, optionCount: 4, inputType: 'buttons', showHint: true,  recencyPenaltyRounds: 4 },
  medium: { tiers: [1, 2, 3], winTarget: 7,  wrongLimit: 3, optionCount: 4, inputType: 'buttons', showHint: false, recencyPenaltyRounds: 6 },
  hard:   { tiers: [1, 2, 3, 4], winTarget: 10, wrongLimit: 3, optionCount: 0, inputType: 'text',    showHint: false, recencyPenaltyRounds: 8 },
  expert: { tiers: [2, 3, 4], winTarget: 15, wrongLimit: 1, optionCount: 0, inputType: 'text',    showHint: false, recencyPenaltyRounds: 10 },
};

// ── Fuzzy Match (Levenshtein) ──
function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix: number[][] = Array(b.length + 1).fill(null).map(() => Array(a.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(matrix[j][i - 1] + 1, matrix[j - 1][i] + 1, matrix[j - 1][i - 1] + cost);
    }
  }
  return matrix[b.length][a.length];
}

export function isFuzzyMatch(guess: string, lang: Language): boolean {
  const g = guess.toLowerCase().trim();
  const targets = [lang.name.toLowerCase(), ...lang.aliases.map(a => a.toLowerCase())];
  for (const t of targets) {
    if (g === t) return true;
    const maxTypos = t.length >= 8 ? 2 : t.length >= 4 ? 1 : 0;
    if (levenshtein(g, t) <= maxTypos) return true;
  }
  return false;
}

// ── Selection Engine ──
function weightedPick<T>(pool: { item: T; weight: number }[]): T {
  const total = pool.reduce((s, e) => s + e.weight, 0);
  let r = Math.random() * total;
  for (const e of pool) {
    r -= e.weight;
    if (r <= 0) return e.item;
  }
  return pool[pool.length - 1].item;
}

export function pickLanguage(eligibleIds: string[], recentIds: string[]): string {
  const recentSet = new Set(recentIds);
  const pool = eligibleIds.map(id => ({ item: id, weight: recentSet.has(id) ? 0.05 : 1.0 }));
  return weightedPick(pool);
}

export function pickSentence(langId: string, recentKeys: Set<string>): { sentence: string; key: string } {
  const lang = getLanguageById(langId)!;
  const pool = lang.sentences.map((s, i) => {
    const key = `${langId}:${i}`;
    return { item: { sentence: s, key }, weight: recentKeys.has(key) ? 0.01 : 1.0 };
  });
  return weightedPick(pool);
}

export function pickDistractors(correctId: string, eligibleIds: string[], count: number): string[] {
  const candidates = eligibleIds.filter(id => id !== correctId);
  return candidates.sort(() => Math.random() - 0.5).slice(0, count);
}

// ── Stats Store ──
export type DifficultyKey = 'easy' | 'medium' | 'hard' | 'expert';

export interface Stats {
  games: number;
  wins: number;
  correctTotal: number;
  wrongTotal: number;
  currentStreak: number;
  bestStreak: number;
  bestTimeMs: number | null;
  bestTimeMsByDifficulty: Record<DifficultyKey, number | null>;
  bestRunByDifficulty: Record<DifficultyKey, number>;
  bestRunByDifficultyWon: Record<DifficultyKey, boolean>;
  winsByDifficulty: Record<DifficultyKey, number>;
  langHistory: Record<string, { correct: number; wrong: number }>;
}

const STATS_KEY = 'languess_stats_v1';
const LEGACY_STATS_KEY = 'lingua_stats_v3';

function defaultStats(): Stats {
  return {
    games: 0,
    wins: 0,
    correctTotal: 0,
    wrongTotal: 0,
    currentStreak: 0,
    bestStreak: 0,
    bestTimeMs: null,
    bestTimeMsByDifficulty: { easy: null, medium: null, hard: null, expert: null },
    bestRunByDifficulty: { easy: 0, medium: 0, hard: 0, expert: 0 },
    bestRunByDifficultyWon: { easy: false, medium: false, hard: false, expert: false },
    winsByDifficulty: { easy: 0, medium: 0, hard: 0, expert: 0 },
    langHistory: {},
  };
}

export function loadStats(): Stats {
  try {
    const raw = getItem(STATS_KEY) ?? getItem(LEGACY_STATS_KEY);
    return raw ? { ...defaultStats(), ...JSON.parse(raw) } : defaultStats();
  } catch {
    return defaultStats();
  }
}

export function saveStats(stats: Stats): void {
  try {
    setItem(STATS_KEY, JSON.stringify(stats));
    removeItem(LEGACY_STATS_KEY);
  } catch {}
}

export function recordGame(
  won: boolean,
  difficulty: DifficultyKey,
  correctCount: number,
  wrongCount: number,
  langStats: Record<string, { correct: number; wrong: number }>,
  completionTimeMs?: number
): { stats: Stats; newPersonalBest: boolean } {
  const s = loadStats();
  let newPersonalBest = false;

  s.games++;
  s.correctTotal += correctCount;
  s.wrongTotal += wrongCount;
  if (won) {
    s.wins++;
    s.winsByDifficulty[difficulty] = (s.winsByDifficulty[difficulty] ?? 0) + 1;
    s.currentStreak++;
    if (s.currentStreak > s.bestStreak) s.bestStreak = s.currentStreak;
    if (completionTimeMs !== undefined) {
      const currentBest = s.bestTimeMsByDifficulty[difficulty];
      if (currentBest === null || completionTimeMs < currentBest) {
        s.bestTimeMsByDifficulty[difficulty] = completionTimeMs;
        newPersonalBest = true;
      }
      if (s.bestTimeMs === null || completionTimeMs < s.bestTimeMs) {
        s.bestTimeMs = completionTimeMs;
      }
    }
  } else {
    s.currentStreak = 0;
  }
  if (s.bestRunByDifficulty[difficulty] < correctCount) {
    s.bestRunByDifficulty[difficulty] = correctCount;
    s.bestRunByDifficultyWon[difficulty] = won;
  } else if (s.bestRunByDifficulty[difficulty] === correctCount && won && !s.bestRunByDifficultyWon[difficulty]) {
    // Update the won flag if we just won with the same best score
    s.bestRunByDifficultyWon[difficulty] = true;
  }
  for (const [id, st] of Object.entries(langStats)) {
    if (!s.langHistory[id]) s.langHistory[id] = { correct: 0, wrong: 0 };
    s.langHistory[id].correct += st.correct;
    s.langHistory[id].wrong += st.wrong;
  }
  saveStats(s);
  return { stats: s, newPersonalBest };
}

export function formatElapsedTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function getDerivedStats(s: Stats) {
  const total = s.correctTotal + s.wrongTotal;
  const accuracy = total ? Math.round((s.correctTotal / total) * 100) : 0;
  const mastered = Object.values(s.langHistory).filter(l => l.correct >= 3 && l.wrong === 0).length;
  return { ...s, accuracy, mastered };
}
