import { useState } from 'react';
import { type DailyScore, DAILY_CONFIG, generateShareText, getTodayDateStr, loadDailyState } from '../../engine/daily-challenge';

interface Props {
  score: DailyScore;
  onPlayAgain: () => void;
  onMenu: () => void;
}

export function DailyChallengeResult({ score, onPlayAgain, onMenu }: Props) {
  const [copied, setCopied] = useState(false);
  const state = loadDailyState();
  const today = getTodayDateStr();

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const handleShare = async () => {
    const text = generateShareText(score, today);
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="end-screen">
      <div className="end-icon">{score.perfect ? '🏆' : score.score >= 5 ? '⭐' : '📅'}</div>
      <div className={`end-title ${score.perfect ? 'win-title' : ''}`}>
        {score.perfect ? 'Perfect!' : 'Daily Complete'}
      </div>
      <div className="end-subtitle">
        {score.perfect
          ? 'Flawless daily challenge!'
          : `You got ${score.score}/${DAILY_CONFIG.roundCount} right.`}
      </div>

      <div className="end-stats">
        <div className="end-stat"><span className="end-stat-label">Score</span><span className="end-stat-val">{score.score}/{DAILY_CONFIG.roundCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Accuracy</span><span className="end-stat-val">{score.accuracy}%</span></div>
        <div className="end-stat"><span className="end-stat-label">Time</span><span className="end-stat-val">{formatTime(score.timeMs)}</span></div>
        <div className="end-stat"><span className="end-stat-label">Streak 🔥</span><span className="end-stat-val">{state.streak}</span></div>
        <div className="end-stat"><span className="end-stat-label">Best Score</span><span className="end-stat-val">{state.bestScore}/{DAILY_CONFIG.roundCount}</span></div>
        <div className="end-stat"><span className="end-stat-label">Best Time</span><span className="end-stat-val">{state.bestTimeMs !== null ? formatTime(state.bestTimeMs) : '--:--'}</span></div>
      </div>

      <button className="action-btn visible" onClick={handleShare}>
        {copied ? '✅ Copied!' : '📋 Share Result'}
      </button>
      <button className="action-btn secondary visible" onClick={onPlayAgain}>
        Play Again (practice)
      </button>
      <button className="action-btn secondary visible" onClick={onMenu}>
        ← Back to Menu
      </button>
    </div>
  );
}
