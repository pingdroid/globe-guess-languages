import { GameProvider, useGame, useStats } from '../../stores/game-store';
import { getDerivedStats, loadStats } from '../../engine/game-engine';
import AuthModal from '../auth/AuthModal';
import ProfileMenu from '../auth/ProfileMenu';
import { useState, useEffect } from 'react';
import { useUser } from '../../stores/user-store';
import { StartScreen } from './StartScreen';
import { PlayScreen } from './PlayScreen';
import { EndScreen } from './EndScreen';
import { DailyChallengeResult } from './DailyChallengeResult';

function StatsBar() {
  const { state } = useGame();
  const [stats, setStats] = useState(getDerivedStats(loadStats()));

  // Re-read stats when phase changes (after game ends and stats are written)
  useEffect(() => {
    setStats(getDerivedStats(loadStats()));
  }, [state.phase]);

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
  const { initialized } = useUser();
  return (
    <header className="game-header">
      <div>
        <h1 className="logo" onClick={() => dispatch({ type: 'QUIT' })}>Languess</h1>
        <p className="tagline">Guess the language</p>
      </div>
      <div className="profile-anchor" style={{ opacity: initialized ? 1 : 0, transition: 'opacity 240ms ease' }}>
        <ProfileMenu />
      </div>
    </header>
  );
}

function GameRouter() {
  const { state, dispatch } = useGame();

  switch (state.phase) {
    case 'menu':
      return <StartScreen />;
    case 'playing':
    case 'revealed':
    case 'final-loss-revealed':
      return <PlayScreen />;
    case 'won':
    case 'lost':
      if (state.isDaily && state.dailyScore) {
        return <DailyChallengeResult
          score={state.dailyScore}
          onPlayAgain={() => dispatch({ type: 'START_DAILY' })}
          onMenu={() => dispatch({ type: 'QUIT' })}
        />;
      }
      return <EndScreen />;
  }
}

export function Game() {
  const { initialized, isGuest } = useUser();
  const [dismissed, setDismissed] = useState(false);
  const showAuthModal = initialized && isGuest && !dismissed;

  return (
    <GameProvider>
      <div className="game-wrapper">
        {showAuthModal && <AuthModal onClose={() => setDismissed(true)} />}
        <Header />
        <StatsBar />
        <GameRouter />
      </div>
    </GameProvider>
  );
}
