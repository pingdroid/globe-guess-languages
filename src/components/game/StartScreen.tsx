import { useGame } from '../../stores/game-store';

const diffOptions = [
  { key: 'easy', icon: '🌱', title: 'Easy', tag: '5 to win · 3 lives', desc: 'Multiple choice. Common languages. Regional hints on.' },
  { key: 'medium', icon: '⚡', title: 'Medium', tag: '7 to win · 3 lives', desc: 'Multiple choice. Global mix. No hints.' },
  { key: 'hard', icon: '🔥', title: 'Hard', tag: '10 to win · 3 lives', desc: 'Type the name. Rare languages included.' },
  { key: 'expert', icon: '👑', title: 'Expert', tag: '15 to win · sudden death', desc: 'Type the name. One mistake ends the run.' },
];

export function StartScreen() {
  const { dispatch } = useGame();

  return (
    <div className="start-screen">
      <div className="start-intro">
        <h2>Pick a challenge</h2>
        <p>Read a snippet, identify the language. Earn streaks, master tongues, climb tiers.</p>
      </div>

      <div className="start-menu">
        {diffOptions.map(d => (
          <button key={d.key} className="diff-select-btn" data-diff={d.key} onClick={() => dispatch({ type: 'START_GAME', difficulty: d.key })}>
            <div className="diff-icon">{d.icon}</div>
            <div className="diff-body">
              <div className="diff-title-row">
                <div className="diff-title">{d.title}</div>
                <div className="diff-tag">{d.tag}</div>
              </div>
              <div className="diff-desc">{d.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
