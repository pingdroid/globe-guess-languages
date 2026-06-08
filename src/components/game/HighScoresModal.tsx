import { useEffect } from 'react';
import { formatElapsedTime } from '../../engine/game-engine';
import { getHighScoresSummary, type HighScoresSummary } from '../../engine/high-scores';
import type { Stats } from '../../engine/game-engine';

interface HighScoresModalProps {
  stats: Stats;
  onClose: () => void;
}

export function HighScoresModal({ stats, onClose }: HighScoresModalProps) {
  const summary: HighScoresSummary = getHighScoresSummary(stats);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="high-scores-overlay" role="dialog" aria-modal="true" aria-labelledby="high-scores-title" onClick={onClose}>
      <div className="high-scores-modal" onClick={event => event.stopPropagation()}>
        <button type="button" className="high-scores-close" onClick={onClose} aria-label="Close high scores">
          ×
        </button>

        <div className="high-scores-header">
          <div className="high-scores-icon">🏆</div>
          <div>
            <div className="high-scores-label">High Scores</div>
            <div className="high-scores-subtitle">Your best runs are stored locally on this device.</div>
          </div>
        </div>

        {!summary.hasScores ? (
          <div className="high-scores-empty">
            <div className="high-scores-empty-icon">🏆</div>
            <div className="high-scores-empty-title">No high scores yet!</div>
            <div className="high-scores-empty-copy">Play a game to set your first record.</div>
          </div>
        ) : (
          <div className="high-scores-body">
            <div className="high-scores-section">
              <div className="high-scores-section-title">Best Runs</div>
              <div className="high-scores-runs-list">
                {summary.bestRuns.map(item => (
                  <div key={item.difficulty} className={`high-scores-run-item ${item.won ? 'completed' : 'incomplete'}`}>
                    <div className="high-scores-run-left">
                      <div className="high-scores-run-icon">{item.icon}</div>
                      <div className="high-scores-run-meta">
                        <div className="high-scores-run-name">{item.difficulty.charAt(0).toUpperCase() + item.difficulty.slice(1)}</div>
                        <div className="high-scores-run-score">{item.run}/{item.target}</div>
                      </div>
                    </div>
                    {item.won && item.timeMs !== null && (
                      <div className="high-scores-run-time">{formatElapsedTime(item.timeMs)}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="high-scores-section">
              <div className="high-scores-section-title">Overall Stats</div>
              <div className="high-scores-item">
                <div className="high-scores-item-label">Accuracy</div>
                <div className="high-scores-item-value">{summary.accuracy}%</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
