import { createContext, useContext, useReducer, type ReactNode } from 'react';
import { type DifficultyConfig, DIFFICULTIES, pickLanguage, pickSentence, pickDistractors, isFuzzyMatch, recordGame, loadStats, getDerivedStats } from '../engine/game-engine';
import { getLanguageById, getLanguagesByTiers } from '../data/languages';

// ── Types ──
type Phase = 'menu' | 'playing' | 'revealed' | 'won' | 'lost';

interface GameState {
  phase: Phase;
  difficulty: string | null;
  cfg: DifficultyConfig | null;
  correctCount: number;
  wrongCount: number;
  currentLangId: string | null;
  currentSentence: string;
  options: string[];
  hint: string;
  lastGuessCorrect: boolean | null;
  recentLangIds: string[];
  recentSentenceKeys: Set<string>;
  langStats: Record<string, { correct: number; wrong: number }>;
}

type Action =
  | { type: 'START_GAME'; difficulty: string }
  | { type: 'NEXT_ROUND' }
  | { type: 'GUESS'; guessValue: string; inputMode: 'buttons' | 'text' }
  | { type: 'QUIT' };

const initialState: GameState = {
  phase: 'menu', difficulty: null, cfg: null,
  correctCount: 0, wrongCount: 0,
  currentLangId: null, currentSentence: '', options: [], hint: '',
  lastGuessCorrect: null,
  recentLangIds: [], recentSentenceKeys: new Set(), langStats: {},
};

function setupRound(state: GameState): GameState {
  const cfg = state.cfg!;
  const eligible = getLanguagesByTiers(cfg.tiers).map(l => l.id);
  const langId = pickLanguage(eligible, state.recentLangIds);
  const { sentence, key } = pickSentence(langId, state.recentSentenceKeys);
  const lang = getLanguageById(langId)!;

  const recentLangIds = [...state.recentLangIds, langId].slice(-cfg.recencyPenaltyRounds);
  const recentSentenceKeys = new Set(state.recentSentenceKeys);
  recentSentenceKeys.add(key);

  let options: string[] = [];
  if (cfg.inputType === 'buttons') {
    const distractors = pickDistractors(langId, eligible, cfg.optionCount - 1);
    options = [...distractors, langId].sort(() => Math.random() - 0.5);
  }

  return {
    ...state,
    phase: 'playing',
    currentLangId: langId,
    currentSentence: sentence,
    options,
    hint: cfg.showHint ? `Region: ${lang.region}` : '',
    lastGuessCorrect: null,
    recentLangIds,
    recentSentenceKeys,
  };
}

function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'START_GAME': {
      const cfg = DIFFICULTIES[action.difficulty];
      const fresh: GameState = {
        ...initialState,
        phase: 'playing',
        difficulty: action.difficulty,
        cfg,
        recentSentenceKeys: new Set(),
      };
      return setupRound(fresh);
    }
    case 'NEXT_ROUND':
      return setupRound(state);
    case 'GUESS': {
      const cfg = state.cfg!;
      const correctLang = getLanguageById(state.currentLangId!)!;
      const isCorrect = action.inputMode === 'text'
        ? isFuzzyMatch(action.guessValue, correctLang)
        : action.guessValue === state.currentLangId;

      const langStats = { ...state.langStats };
      if (!langStats[state.currentLangId!]) langStats[state.currentLangId!] = { correct: 0, wrong: 0 };
      if (isCorrect) langStats[state.currentLangId!].correct++;
      else langStats[state.currentLangId!].wrong++;

      const correctCount = state.correctCount + (isCorrect ? 1 : 0);
      const wrongCount = state.wrongCount + (isCorrect ? 0 : 1);

      let phase: Phase = 'revealed';
      if (correctCount >= cfg.winTarget) {
        phase = 'won';
        recordGame(true, correctCount, wrongCount, langStats);
      } else if (wrongCount >= cfg.wrongLimit) {
        phase = 'lost';
        recordGame(false, correctCount, wrongCount, langStats);
      }

      return { ...state, phase, correctCount, wrongCount, lastGuessCorrect: isCorrect, langStats };
    }
    case 'QUIT':
      return initialState;
    default:
      return state;
  }
}

// ── Context ──
const GameContext = createContext<{ state: GameState; dispatch: React.Dispatch<Action> } | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}

export function useStats() {
  return getDerivedStats(loadStats());
}
