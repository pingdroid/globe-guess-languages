import { GameProvider, useGame, useStats } from '../../stores/game-store';
import { getDerivedStats, loadStats } from '../../engine/game-engine';
import { loadDailyState } from '../../engine/daily-challenge';
import AuthModal from '../auth/AuthModal';
import ProfileMenu from '../auth/ProfileMenu';
import { useState, useEffect } from 'react';
import { useUser } from '../../stores/user-store';
import { StartScreen } from './StartScreen';
import { PlayScreen } from './PlayScreen';
import { EndScreen } from './EndScreen';
import { DailyChallengeResult } from './DailyChallengeResult';
import { FriendChallengeResult } from './FriendChallengeResult';
import { fetchChallenge, submitCreatorResult, submitChallengerResult } from '../../engine/friend-challenge';

function StatsBar() {
  const { state } = useGame();
  const [stats, setStats] = useState(getDerivedStats(loadStats()));
  const [dailyStreak, setDailyStreak] = useState(loadDailyState().streak);

  // Re-read stats when phase changes (after game ends and stats are written)
  useEffect(() => {
    setStats(getDerivedStats(loadStats()));
    setDailyStreak(loadDailyState().streak);
  }, [state.phase]);

  return (
    <div className="stats-bar">
      <div className="stat-item"><span className="stat-val">{stats.games}</span><span className="stat-label">Games</span></div>
      <div className="stat-item"><span className="stat-val">{stats.wins}</span><span className="stat-label">Wins</span></div>
      <div className="stat-item"><span className="stat-val">{stats.accuracy}%</span><span className="stat-label">Accuracy</span></div>
      <div className="stat-item"><span className="stat-val streak-val">{dailyStreak}</span><span className="stat-label">Daily Streak</span></div>
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

function ChallengeLoader({ challengeId, onLoaded }: { challengeId: string; onLoaded: () => void }) {
  const { dispatch } = useGame();
  useEffect(() => {
    (async () => {
      const config = await fetchChallenge(challengeId);
      if (config) {
        dispatch({ type: 'START_CHALLENGE', challengeId: config.id, seed: config.seed, difficulty: config.difficulty as any, tiers: config.tiers, roundCount: config.roundCount, wrongLimit: config.wrongLimit, isCreator: false, challengeConfig: config });
        onLoaded();
      }
    })();
  }, [challengeId]);
  return <div className="end-screen"><div className="end-icon">⚔️</div><div className="end-title">Loading challenge...</div></div>;
}

function GameRouter() {
  const { state, dispatch } = useGame();
  const { user } = useUser();

  switch (state.phase) {
    case 'menu':
      return <StartScreen />;
    case 'playing':
    case 'revealed':
    case 'final-loss-revealed':
      return <PlayScreen />;
    case 'won':
    case 'lost':
      if (state.challengeId && state.challengeConfig && state.dailyScore) {
        // Submit result to Supabase
        const score = state.dailyScore;
        if (state.isCreator) {
          submitCreatorResult(state.challengeId, score.score, score.accuracy, score.timeMs);
        } else {
          submitChallengerResult(state.challengeId, score.score, score.accuracy, score.timeMs, user?.username || user?.email || 'Guest');
        }
        return <FriendChallengeResult
          challenge={state.challengeConfig}
          myScore={score.score}
          myAccuracy={score.accuracy}
          myTimeMs={score.timeMs}
          isCreator={state.isCreator}
          onMenu={() => dispatch({ type: 'QUIT' })}
        />;
      }
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
  const [pendingChallenge, setPendingChallenge] = useState<string | null>(null);
  const showAuthModal = initialized && isGuest && !dismissed && !pendingChallenge;

  // Check for challenge URL on mount
  useEffect(() => {
    const id = (window as any).__pendingChallenge;
    if (id) {
      delete (window as any).__pendingChallenge;
      setPendingChallenge(id);
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  return (
    <GameProvider>
      <div className="game-wrapper">
        {showAuthModal && <AuthModal onClose={() => setDismissed(true)} />}
        <Header />
        <StatsBar />
        {pendingChallenge ? (
          <ChallengeLoader challengeId={pendingChallenge} onLoaded={() => setPendingChallenge(null)} />
        ) : (
          <GameRouter />
        )}
      </div>
    </GameProvider>
  );
}
