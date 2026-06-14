import { useState } from 'react';
import { useGame, useStats } from '../../stores/game-store';
import { formatElapsedTime, type DifficultyKey } from '../../engine/game-engine';
import { HighScoresModal } from './HighScoresModal';
import { DailyChallengeCard } from './DailyChallengeCard';

const diffOptions: Array<{ key: DifficultyKey; icon: string; title: string; tag: string; desc: string }> = [
  { key: 'easy', icon: '🌱', title: 'Easy', tag: '5 to win · 3 lives', desc: 'Multiple choice. Common languages. Regional hints on.' },
  { key: 'medium', icon: '⚡', title: 'Medium', tag: '7 to win · 3 lives', desc: 'Multiple choice. Global mix. No hints.' },
  { key: 'hard', icon: '🔥', title: 'Hard', tag: '10 to win · 3 lives', desc: 'Type the name. Rare languages included.' },
  { key: 'expert', icon: '👑', title: 'Expert', tag: '15 to win · sudden death', desc: 'Type the name. One mistake ends the run.' },
];

export function StartScreen() {
  const { dispatch } = useGame();
  const stats = useStats();
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showHighScores, setShowHighScores] = useState(false);

  return (
    <div className="start-screen">
      <DailyChallengeCard onPlay={() => dispatch({ type: 'START_DAILY' })} />

      <div className="start-intro">
        <h2>Pick a challenge</h2>
        <p>Read a snippet, identify the language. Earn streaks, master tongues, climb tiers.</p>
      </div>

      <div className="start-high-scores">
        <button type="button" className="action-btn high-scores-panel-btn" onClick={() => setShowHighScores(true)}>
          View high scores
        </button>
      </div>

      <div className="start-menu">
        {diffOptions.map(d => {
          const personalBest = stats.bestTimeMsByDifficulty[d.key];
          return (
            <button key={d.key} className="diff-select-btn" data-diff={d.key} onClick={() => dispatch({ type: 'START_GAME', difficulty: d.key })}>
              <div className="diff-icon">{d.icon}</div>
              <div className="diff-body">
                <div className="diff-title-row">
                  <div className="diff-title">{d.title}</div>
                  <div className="diff-tag">{d.tag}</div>
                </div>
                <div className="diff-desc">{d.desc}</div>
              </div>
              <div className="diff-meta">
                <div className="diff-meta-label">Personal Best</div>
                <div className="diff-meta-value">{personalBest !== null ? formatElapsedTime(personalBest) : '--:--'}</div>
                <div className="diff-meta-subtext">{stats.winsByDifficulty[d.key]} wins</div>
              </div>
              <div className="diff-arrow">›</div>
            </button>
          );
        })}
      </div>

      <button type="button" className="how-to-play-link" onClick={() => setShowHowToPlay(true)}>
        How to play
      </button>
      <button type="button" className="how-to-play-link" onClick={() => setShowPrivacy(true)}>
        Privacy policy
      </button>

      {showHighScores && <HighScoresModal stats={stats} onClose={() => setShowHighScores(false)} />}

      {showHowToPlay && (
        <div className="how-to-play-overlay" role="dialog" aria-modal="true" aria-labelledby="how-to-play-title">
          <div className="how-to-play-modal">
            <button type="button" className="how-to-play-close" onClick={() => setShowHowToPlay(false)} aria-label="Close how to play">
              ×
            </button>
            <div className="how-to-play-title" id="how-to-play-title">How to play</div>
            <div className="how-to-play-subtitle">A quick guide to how the game works and what to expect.</div>
            <div className="how-to-play-step">
              <div className="how-to-play-step-icon">🎯</div>
              <div>
                <strong>Pick a difficulty</strong>
                <div className="how-to-play-step-text">Easy gives hints, hard requires typing, expert is sudden death.</div>
              </div>
            </div>
            <div className="how-to-play-step">
              <div className="how-to-play-step-icon">🔍</div>
              <div>
                <strong>Read carefully</strong>
                <div className="how-to-play-step-text">Look for script, words, and grammar patterns to identify the language.</div>
              </div>
            </div>
            <div className="how-to-play-step">
              <div className="how-to-play-step-icon">💬</div>
              <div>
                <strong>Guess the language</strong>
                <div className="how-to-play-step-text">Tap the correct option or type the language name if you’re in text mode.</div>
              </div>
            </div>
            <div className="how-to-play-step">
              <div className="how-to-play-step-icon">📈</div>
              <div>
                <strong>Build your streak</strong>
                <div className="how-to-play-step-text">Each correct answer brings you closer to the win target.</div>
              </div>
            </div>
            <div className="how-to-play-step">
              <div className="how-to-play-step-icon">⚠️</div>
              <div>
                <strong>Watch your lives</strong>
                <div className="how-to-play-step-text">Wrong answers cost a life, and expert mode ends after one mistake.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPrivacy && (
        <div className="how-to-play-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-policy-title">
          <div className="how-to-play-modal">
            <button type="button" className="how-to-play-close" onClick={() => setShowPrivacy(false)} aria-label="Close privacy policy">
              ×
            </button>
            <div className="how-to-play-title" id="privacy-policy-title">Privacy and terms</div>
            <div className="how-to-play-subtitle">This game only stores local browser stats and is hosted by Cloudflare.</div>
            <div className="how-to-play-step-text">The game runs entirely in your browser and does not collect personal data from players.</div>
            <div className="how-to-play-step-text">It saves only aggregated game stats and progress in localStorage on your device.</div>
            <div className="how-to-play-step-text">The game itself uses no cookies, ads, trackers, or analytics scripts.</div>
            <div className="how-to-play-step-text">Hosting is handled by Cloudflare. Cloudflare may process request metadata as described in their privacy policy:</div>
            <div className="how-to-play-step-text"><a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer" className="privacy-link">Cloudflare Privacy Policy</a></div>
            <div className="how-to-play-step-text">Your source repo is private and only used for deployment; GitHub is not contacted by players while using the game.</div>
            <div className="how-to-play-step-text">Your local stats remain on your device unless you clear your browser storage.</div>
          </div>
        </div>
      )}
    </div>
  );
}
