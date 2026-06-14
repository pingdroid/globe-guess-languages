import { supabase } from '../lib/supabase-client';
import { generateDailyChallenge, type DailyChallenge, DAILY_CONFIG } from './daily-challenge';
import { DIFFICULTIES, type DifficultyKey } from './game-engine';

export interface ChallengeConfig {
  id: string;
  seed: number;
  difficulty: DifficultyKey;
  roundCount: number;
  wrongLimit: number;
  tiers: number[];
  createdByName: string;
  creatorScore?: number;
  creatorAccuracy?: number;
  creatorTimeMs?: number;
  challengerScore?: number;
  challengerAccuracy?: number;
  challengerTimeMs?: number;
  challengerName?: string;
}

// Generate 8-char alphanumeric ID
function generateId(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I/O/0/1 to avoid confusion
  let id = '';
  for (let i = 0; i < 8; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

// Map difficulty to challenge config
function difficultyToConfig(difficulty: DifficultyKey) {
  const d = DIFFICULTIES[difficulty];
  return {
    roundCount: d.winTarget,
    wrongLimit: d.wrongLimit,
    tiers: d.tiers,
  };
}

// Create a new challenge
export async function createChallenge(difficulty: DifficultyKey, creatorName: string): Promise<ChallengeConfig | null> {
  const id = generateId();
  const seed = Math.floor(Math.random() * 2147483647);
  const cfg = difficultyToConfig(difficulty);

  const { error } = await supabase.from('challenges').insert({
    id,
    seed,
    difficulty,
    round_count: cfg.roundCount,
    wrong_limit: cfg.wrongLimit,
    tiers: cfg.tiers,
    created_by_name: creatorName,
  });

  if (error) {
    console.error('Failed to create challenge:', error);
    return null;
  }

  return { id, seed, difficulty, ...cfg, createdByName: creatorName };
}

// Fetch challenge by ID
export async function fetchChallenge(id: string): Promise<ChallengeConfig | null> {
  const { data, error } = await supabase
    .from('challenges')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error || !data) return null;

  return {
    id: data.id,
    seed: data.seed,
    difficulty: data.difficulty,
    roundCount: data.round_count,
    wrongLimit: data.wrong_limit,
    tiers: data.tiers,
    createdByName: data.created_by_name,
    creatorScore: data.creator_score,
    creatorAccuracy: data.creator_accuracy,
    creatorTimeMs: data.creator_time_ms,
    challengerScore: data.challenger_score,
    challengerAccuracy: data.challenger_accuracy,
    challengerTimeMs: data.challenger_time_ms,
    challengerName: data.challenger_name,
  };
}

// Submit creator's result
export async function submitCreatorResult(id: string, score: number, accuracy: number, timeMs: number) {
  await supabase.from('challenges').update({
    creator_score: score,
    creator_accuracy: accuracy,
    creator_time_ms: timeMs,
  }).eq('id', id);
}

// Submit challenger's result
export async function submitChallengerResult(id: string, score: number, accuracy: number, timeMs: number, name: string) {
  await supabase.from('challenges').update({
    challenger_score: score,
    challenger_accuracy: accuracy,
    challenger_time_ms: timeMs,
    challenger_name: name,
    challenger_played_at: new Date().toISOString(),
  }).eq('id', id);
}

// Generate the challenge rounds from seed + config (reuses daily challenge PRNG)
export function generateChallengeRounds(seed: number, tiers: number[], roundCount: number): DailyChallenge {
  // Use the seed as a fake date string to reuse generateDailyChallenge's PRNG
  // Actually, let's extract the generation logic properly
  return generateFromSeed(seed, tiers, roundCount);
}

// Deterministic generation from arbitrary seed
import { getLanguagesByTiers, getLanguageById } from '../data/languages';

function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function generateFromSeed(seed: number, tiers: number[], roundCount: number): DailyChallenge {
  const rng = mulberry32(seed);
  const eligible = getLanguagesByTiers(tiers);
  const rounds: DailyChallenge['rounds'] = [];
  const usedLangIds: string[] = [];

  for (let i = 0; i < roundCount; i++) {
    const available = eligible.filter(l => !usedLangIds.includes(l.id));
    if (available.length === 0) break;
    const langIndex = Math.floor(rng() * available.length);
    const lang = available[langIndex];
    usedLangIds.push(lang.id);

    const sentenceIndex = Math.floor(rng() * lang.sentences.length);

    const distractorPool = eligible.filter(l => l.id !== lang.id);
    const distractors: string[] = [];
    const usedD = new Set<number>();
    while (distractors.length < 3 && usedD.size < distractorPool.length) {
      const idx = Math.floor(rng() * distractorPool.length);
      if (!usedD.has(idx)) {
        usedD.add(idx);
        distractors.push(distractorPool[idx].id);
      }
    }

    rounds.push({ langId: lang.id, sentenceIndex, distractorIds: distractors });
  }

  return { date: String(seed), rounds };
}

// Share URL
export function getChallengeUrl(id: string): string {
  return `https://globe-guess-languages1.pages.dev/?challenge=${id}`;
}

// Share text
export function generateChallengeShareText(id: string, difficulty: string, score: number, roundCount: number, timeMs: number): string {
  const timeStr = `${Math.floor(timeMs / 60000)}:${String(Math.floor((timeMs % 60000) / 1000)).padStart(2, '0')}`;
  return `⚔️ Languess Challenge\n\nI scored ${score}/${roundCount} in ${timeStr} on ${difficulty} mode.\n\nCan you beat me?\n${getChallengeUrl(id)}`;
}
