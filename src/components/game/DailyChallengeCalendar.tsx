import { useState } from 'react';
import { loadDailyState, getTodayDateStr } from '../../engine/daily-challenge';

interface Props {
  onSelectDate: (date: string) => void;
  onClose: () => void;
}

export function DailyChallengeCalendar({ onSelectDate, onClose }: Props) {
  const today = getTodayDateStr();
  const state = loadDailyState();
  const [monthOffset, setMonthOffset] = useState(0);

  // Launch date (first day challenges are available)
  const launchDate = '2026-06-14';

  const now = new Date();
  const viewDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = viewDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  // Build day grid
  const days: (number | null)[] = [];
  for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) days.push(null); // Monday start
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const getDateStr = (day: number) => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  const getDayStatus = (day: number) => {
    const dateStr = getDateStr(day);
    if (dateStr > today) return 'future';
    if (dateStr < launchDate) return 'unavailable';
    if (state.history[dateStr]) return 'completed';
    if (dateStr === today) return 'today';
    return 'available';
  };

  return (
    <div className="how-to-play-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="how-to-play-modal daily-calendar-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="how-to-play-close" onClick={onClose}>×</button>
        <div className="daily-calendar-title">📅 Daily Challenge Archive</div>
        <div className="daily-calendar-subtitle">Play any past challenge. Same puzzle everyone else got that day.</div>

        <div className="cal-nav">
          <button onClick={() => setMonthOffset(m => m - 1)} className="cal-nav-btn">◀</button>
          <span className="cal-month-label">{monthName}</span>
          <button onClick={() => setMonthOffset(m => m + 1)} disabled={monthOffset >= 0} className="cal-nav-btn">▶</button>
        </div>

        <div className="cal-grid">
          {['M','T','W','T','F','S','S'].map((d, i) => (
            <div key={i} className="cal-header-cell">{d}</div>
          ))}
          {days.map((day, i) => {
            if (day === null) return <div key={i} className="cal-cell empty" />;
            const status = getDayStatus(day);
            const dateStr = getDateStr(day);
            const result = state.history[dateStr];
            return (
              <div
                key={i}
                className={`cal-cell ${status}`}
                onClick={() => {
                  if (status !== 'future' && status !== 'unavailable') onSelectDate(dateStr);
                }}
              >
                <span className="cal-day-num">{day}</span>
                {result && <span className="cal-day-score">{result.score}/7</span>}
                {status === 'today' && !result && <span className="cal-day-badge">●</span>}
              </div>
            );
          })}
        </div>

        <div className="cal-legend">
          <span><span className="cal-dot completed" /> Completed</span>
          <span><span className="cal-dot today" /> Today</span>
          <span><span className="cal-dot available" /> Available</span>
        </div>
      </div>
    </div>
  );
}
