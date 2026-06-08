import { useGame, useStats } from '../../stores/game-store';
import { formatElapsedTime, type DifficultyKey } from '../../engine/game-engine';

export function EndScreen() {
  const { state, dispatch } = useGame();
  const stats = useStats();
  const won = state.phase === 'won';
  const finalTime = state.finalTimeMs !== null ? formatElapsedTime(state.finalTimeMs) : '--:--';
  const pbTimeMs = state.difficulty ? stats.bestTimeMsByDifficulty[state.difficulty as DifficultyKey] : null;

  return (
    <div className="end-screen">
      <div className="end-icon">{won ? '🏆' : '📚'}</div>
      <div className={`end-title ${won ? 'win-title' : ''}`}>{won ? 'Victory!' : 'Game Over'}</div>
      <div className="end-subtitle">
        {won
          ? 'You conquered this linguistic challenge.'
          : `${state.cfg!.wrongLimit} wrong — you got ${state.correctCount} right. Keep practicing!`}
      </div>

      {won && state.newPersonalBest && (
        <div className="personal-best-celebration">🎉 New Personal Best!</div>
      )}

      <div className="end-stats">
        <div className="end-stat"><span className="end-stat-label">Correct</span><span className="end-stat-val">{state.correctCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Wrong</span><span className="end-stat-val">{state.wrongCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Accuracy</span><span className="end-stat-val">{stats.accuracy}%</span></div>
        <div className="end-stat"><span className="end-stat-label">Streak 🔥</span><span className="end-stat-val">{stats.currentStreak}</span></div>
        <div className="end-stat"><span className="end-stat-label">Time</span><span className="end-stat-val">{finalTime}</span></div>
        {won && (
          <div className="end-stat"><span className="end-stat-label">Personal Best</span><span className="end-stat-val">{pbTimeMs !== null ? formatElapsedTime(pbTimeMs) : '--:--'}</span></div>
        )}
      </div>

      <button className="action-btn visible" onClick={() => dispatch({ type: 'START_GAME', difficulty: state.difficulty! })}>
        Play Again
      </button>
      <button className="action-btn secondary visible" onClick={() => dispatch({ type: 'QUIT' })}>
        Change Difficulty
      </button>
    </div>
  );
}
