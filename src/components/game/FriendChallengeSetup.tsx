import { useState } from 'react';
import { createChallenge, getChallengeUrl, type ChallengeConfig } from '../../engine/friend-challenge';
import { type DifficultyKey } from '../../engine/game-engine';
import { useUser } from '../../stores/user-store';

interface Props {
  onStart: (challengeId: string, seed: number, difficulty: DifficultyKey, tiers: number[], roundCount: number, wrongLimit: number, config: ChallengeConfig) => void;
  onClose: () => void;
}

const options: Array<{ key: DifficultyKey; icon: string; label: string; desc: string }> = [
  { key: 'easy', icon: '🌱', label: 'Easy', desc: '5 rounds · 3 lives · common languages' },
  { key: 'medium', icon: '⚡', label: 'Medium', desc: '7 rounds · 3 lives · global mix' },
  { key: 'hard', icon: '🔥', label: 'Hard', desc: '10 rounds · 3 lives · rare included' },
];

export function FriendChallengeSetup({ onStart, onClose }: Props) {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [created, setCreated] = useState<ChallengeConfig | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSelect = async (diff: DifficultyKey) => {
    setLoading(true);
    const name = user?.username || user?.email || 'Anonymous';
    const challenge = await createChallenge(diff, name);
    if (challenge) {
      setCreated(challenge);
    } else {
      alert('Failed to create challenge. Check your connection.');
    }
    setLoading(false);
  };

  const handleShare = async () => {
    if (!created) return;
    const url = getChallengeUrl(created.id);
    const text = `⚔️ I challenge you to Languess!\n\n${created.difficulty} mode · ${created.roundCount} rounds\n\n${url}`;
    try {
      if (navigator.share) {
        await navigator.share({ text });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePlay = () => {
    if (!created) return;
    onStart(created.id, created.seed, created.difficulty as DifficultyKey, created.tiers, created.roundCount, created.wrongLimit, created);
  };

  return (
    <div className="how-to-play-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="how-to-play-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="how-to-play-close" onClick={onClose}>×</button>

        {!created ? (
          <>
            <div className="how-to-play-title">⚔️ Challenge a Friend</div>
            <div className="how-to-play-subtitle">Pick a difficulty. Share the link, then both play the same challenge.</div>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '20px', color: '#aaa' }}>Creating challenge...</div>
            ) : (
              <div className="challenge-diff-list">
                {options.map(o => (
                  <button key={o.key} className="diff-select-btn" onClick={() => handleSelect(o.key)}>
                    <div className="diff-icon">{o.icon}</div>
                    <div className="diff-body">
                      <div className="diff-title">{o.label}</div>
                      <div className="diff-desc">{o.desc}</div>
                    </div>
                    <div className="diff-arrow">›</div>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="how-to-play-title">⚔️ Challenge Created!</div>
            <div className="how-to-play-subtitle">Share the link with a friend, then play when you're both ready.</div>
            
            <div className="challenge-link-box">
              <code>{getChallengeUrl(created.id)}</code>
            </div>

            <button className="action-btn visible" onClick={handleShare}>
              {copied ? '✅ Link Copied!' : '📋 Copy & Share Link'}
            </button>
            <button className="action-btn secondary visible" onClick={handlePlay}>
              ▶ Play Now
            </button>
          </>
        )}
      </div>
    </div>
  );
}
