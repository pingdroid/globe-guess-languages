import { useState } from 'react';
import { createChallenge } from '../../engine/friend-challenge';
import { type DifficultyKey } from '../../engine/game-engine';
import { useUser } from '../../stores/user-store';

interface Props {
  onStart: (challengeId: string, seed: number, difficulty: DifficultyKey, tiers: number[], roundCount: number, wrongLimit: number) => void;
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

  const handleSelect = async (diff: DifficultyKey) => {
    setLoading(true);
    const name = user?.username || user?.email || 'Anonymous';
    const challenge = await createChallenge(diff, name);
    if (challenge) {
      onStart(challenge.id, challenge.seed, challenge.difficulty, challenge.tiers, challenge.roundCount, challenge.wrongLimit);
    } else {
      alert('Failed to create challenge. Check your connection.');
    }
    setLoading(false);
  };

  return (
    <div className="how-to-play-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="how-to-play-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="how-to-play-close" onClick={onClose}>×</button>
        <div className="how-to-play-title">⚔️ Challenge a Friend</div>
        <div className="how-to-play-subtitle">Pick a difficulty. You play first, then share the link.</div>

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
      </div>
    </div>
  );
}
