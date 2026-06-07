import { useGame, useStats } from '../../stores/game-store';

export function EndScreen() {
  const { state, dispatch } = useGame();
  const stats = useStats();
  const won = state.phase === 'won';

  return (
    <div className="end-screen">
      <div className="end-icon">{won ? '🏆' : '📚'}</div>
      <div className={`end-title ${won ? 'win-title' : ''}`}>{won ? 'Victory!' : 'Game Over'}</div>
      <div className="end-subtitle">
        {won
          ? 'You conquered this linguistic challenge.'
          : `${state.cfg!.wrongLimit} wrong — you got ${state.correctCount} right. Keep practicing!`}
      </div>

      <div className="end-stats">
        <div className="end-stat"><span className="end-stat-label">Correct</span><span className="end-stat-val">{state.correctCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Wrong</span><span className="end-stat-val">{state.wrongCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Accuracy</span><span className="end-stat-val">{stats.accuracy}%</span></div>
        <div className="end-stat"><span className="end-stat-label">Streak 🔥</span><span className="end-stat-val">{stats.currentStreak}</span></div>
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
