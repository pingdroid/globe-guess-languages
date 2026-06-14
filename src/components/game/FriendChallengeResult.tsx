import { useState } from 'react';
import { type ChallengeConfig, getChallengeUrl, generateChallengeShareText } from '../../engine/friend-challenge';

interface Props {
  challenge: ChallengeConfig;
  myScore: number;
  myAccuracy: number;
  myTimeMs: number;
  isCreator: boolean;
  onMenu: () => void;
}

export function FriendChallengeResult({ challenge, myScore, myAccuracy, myTimeMs, isCreator, onMenu }: Props) {
  const [copied, setCopied] = useState(false);

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const opponentScore = isCreator ? challenge.challengerScore : challenge.creatorScore;
  const opponentTime = isCreator ? challenge.challengerTimeMs : challenge.creatorTimeMs;
  const opponentName = isCreator ? (challenge.challengerName || 'Friend') : challenge.createdByName;
  const hasOpponent = opponentScore !== undefined && opponentScore !== null;

  // Determine winner
  let winner = '';
  if (hasOpponent) {
    if (myScore > opponentScore!) winner = 'You win! 🏆';
    else if (myScore < opponentScore!) winner = `${opponentName} wins!`;
    else if (myTimeMs < opponentTime!) winner = 'You win (faster)! 🏆';
    else if (myTimeMs > opponentTime!) winner = `${opponentName} wins (faster)!`;
    else winner = "It's a tie! 🤝";
  }

  const handleShare = async () => {
    const text = generateChallengeShareText(challenge.id, challenge.difficulty, myScore, challenge.roundCount, myTimeMs);
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
      <div className="end-icon">⚔️</div>
      <div className="end-title">Challenge {hasOpponent ? 'Results' : 'Complete'}</div>

      {hasOpponent ? (
        <>
          <div className="challenge-comparison">
            <div className="challenge-player">
              <div className="challenge-player-name">You</div>
              <div className="challenge-player-score">{myScore}/{challenge.roundCount}</div>
              <div className="challenge-player-time">{formatTime(myTimeMs)}</div>
              <div className="challenge-player-acc">{myAccuracy}%</div>
            </div>
            <div className="challenge-vs">VS</div>
            <div className="challenge-player">
              <div className="challenge-player-name">{opponentName}</div>
              <div className="challenge-player-score">{opponentScore}/{challenge.roundCount}</div>
              <div className="challenge-player-time">{opponentTime ? formatTime(opponentTime) : '--'}</div>
              <div className="challenge-player-acc">{(isCreator ? challenge.challengerAccuracy : challenge.creatorAccuracy) || 0}%</div>
            </div>
          </div>
          <div className="challenge-winner">{winner}</div>
        </>
      ) : (
        <div className="end-stats">
          <div className="end-stat"><span className="end-stat-label">Score</span><span className="end-stat-val">{myScore}/{challenge.roundCount}</span></div>
          <div className="end-stat"><span className="end-stat-label">Accuracy</span><span className="end-stat-val">{myAccuracy}%</span></div>
          <div className="end-stat"><span className="end-stat-label">Time</span><span className="end-stat-val">{formatTime(myTimeMs)}</span></div>
        </div>
      )}

      {isCreator && !hasOpponent && (
        <p className="challenge-waiting">Share the link — waiting for a friend to play!</p>
      )}

      <button className="action-btn visible" onClick={handleShare}>
        {copied ? '✅ Copied!' : '📋 Share Challenge'}
      </button>
      <button className="action-btn secondary visible" onClick={onMenu}>← Back to Menu</button>
    </div>
  );
}
