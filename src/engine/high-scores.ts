import { type DifficultyKey, type Stats, DIFFICULTIES, getDerivedStats } from './game-engine';

export interface HighScoresSummary {
  bestRuns: Array<{
    difficulty: DifficultyKey;
    icon: string;
    run: number;
    target: number;
    won: boolean;
    timeMs: number | null;
  }>;
  accuracy: number;
  hasScores: boolean;
}

export function getHighScoresSummary(stats: Stats): HighScoresSummary {
  const derived = getDerivedStats(stats);
  const diffIcons: Record<DifficultyKey, string> = { easy: '🌱', medium: '⚡', hard: '🔥', expert: '👑' };
  
  const bestRuns = (Object.keys(DIFFICULTIES) as DifficultyKey[]).map(diff => ({
    difficulty: diff,
    icon: diffIcons[diff],
    run: stats.bestRunByDifficulty[diff],
    target: DIFFICULTIES[diff].winTarget,
    won: stats.bestRunByDifficultyWon[diff],
    timeMs: stats.bestRunByDifficultyWon[diff] ? stats.bestTimeMsByDifficulty[diff] : null,
  }));

  return {
    bestRuns,
    accuracy: derived.accuracy,
    hasScores: stats.games > 0,
  };
}
