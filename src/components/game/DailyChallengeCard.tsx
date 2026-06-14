import { loadDailyState, getTodayDateStr, DAILY_CONFIG } from '../../engine/daily-challenge';

interface Props {
  onPlay: () => void;
  onArchive: () => void;
}

export function DailyChallengeCard({ onPlay, onArchive }: Props) {
  const state = loadDailyState();
  const today = getTodayDateStr();
  const completed = state.date === today && state.completed;

  const formatTime = (ms: number) => {
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  return (
    <div className="daily-challenge-card" onClick={onPlay}>
      <div className="daily-header">
        <span className="daily-icon">📅</span>
        <div>
          <div className="daily-title">Daily Challenge</div>
          <div className="daily-date">{today}</div>
        </div>
        {state.streak > 0 && (
          <div className="daily-streak">🔥 {state.streak} day streak</div>
        )}
      </div>

      {completed ? (
        <div className="daily-result-preview">
          <span className="daily-score">{state.score}/{DAILY_CONFIG.roundCount}</span>
          <span className="daily-time">{formatTime(state.timeMs)}</span>
          <span className="daily-replay">Tap to replay</span>
        </div>
      ) : (
        <div className="daily-cta">
          <span>{DAILY_CONFIG.roundCount} languages · {DAILY_CONFIG.wrongLimit} lives · same for everyone</span>
          <span className="daily-play-btn">Play →</span>
        </div>
      )}
      <div className="daily-archive-link" onClick={(e) => { e.stopPropagation(); onArchive(); }}>
        📆 View past challenges
      </div>
    </div>
  );
}
