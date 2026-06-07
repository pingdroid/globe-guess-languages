import { GameProvider, useGame, useStats } from '../../stores/game-store';
import { StartScreen } from './StartScreen';
import { PlayScreen } from './PlayScreen';
import { EndScreen } from './EndScreen';

function StatsBar() {
  const stats = useStats();
  return (
    <div className="stats-bar">
      <div className="stat-item"><span className="stat-val">{stats.games}</span><span className="stat-label">Games</span></div>
      <div className="stat-item"><span className="stat-val">{stats.wins}</span><span className="stat-label">Wins</span></div>
      <div className="stat-item"><span className="stat-val">{stats.accuracy}%</span><span className="stat-label">Accuracy</span></div>
      <div className="stat-item"><span className="stat-val streak-val">{stats.currentStreak}</span><span className="stat-label">Streak</span></div>
      <div className="stat-item"><span className="stat-val master-val">{stats.mastered}</span><span className="stat-label">Mastered</span></div>
    </div>
  );
}

function Header() {
  const { dispatch } = useGame();
  return (
    <header className="game-header">
      <h1 className="logo" onClick={() => dispatch({ type: 'QUIT' })}>Lin<span>g</span>ua</h1>
      <p className="tagline">Guess the language</p>
    </header>
  );
}

function GameRouter() {
  const { state } = useGame();

  switch (state.phase) {
    case 'menu':
      return <StartScreen />;
    case 'playing':
    case 'revealed':
      return <PlayScreen />;
    case 'won':
    case 'lost':
      return <EndScreen />;
  }
}

export function Game() {
  return (
    <GameProvider>
      <div className="game-wrapper">
        <Header />
        <StatsBar />
        <GameRouter />
      </div>
    </GameProvider>
  );
}
