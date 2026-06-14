import { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase-client';
import { type ChallengeConfig, fetchChallenge } from '../../engine/friend-challenge';

interface ChallengeRow {
  id: string;
  difficulty: string;
  round_count: number;
  created_by_name: string;
  created_at: string;
  creator_score: number | null;
  creator_time_ms: number | null;
  challenger_score: number | null;
  challenger_time_ms: number | null;
  challenger_name: string | null;
}

interface Props {
  onViewResult: (config: ChallengeConfig) => void;
  onClose: () => void;
}

export function ChallengeHistory({ onViewResult, onClose }: Props) {
  const [challenges, setChallenges] = useState<ChallengeRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // Fetch challenges where this user was creator or challenger
      // Since we don't have strict auth linking, fetch recent challenges
      const { data, error } = await supabase
        .from('challenges')
        .select('id, difficulty, round_count, created_by_name, created_at, creator_score, creator_time_ms, challenger_score, challenger_time_ms, challenger_name')
        .order('created_at', { ascending: false })
        .limit(20);

      if (!error && data) setChallenges(data);
      setLoading(false);
    })();
  }, []);

  const formatTime = (ms: number | null) => {
    if (!ms) return '--:--';
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  };

  const getStatus = (c: ChallengeRow) => {
    if (c.creator_score !== null && c.challenger_score !== null) return 'completed';
    if (c.creator_score !== null) return 'waiting';
    return 'pending';
  };

  const handleView = async (id: string) => {
    const config = await fetchChallenge(id);
    if (config) onViewResult(config);
  };

  return (
    <div className="how-to-play-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="how-to-play-modal challenge-history-modal" onClick={e => e.stopPropagation()}>
        <button type="button" className="how-to-play-close" onClick={onClose}>×</button>
        <div className="how-to-play-title">⚔️ Challenge History</div>
        <div className="how-to-play-subtitle">View past challenges and results.</div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#aaa' }}>Loading...</div>
        ) : challenges.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>No challenges yet. Create one!</div>
        ) : (
          <div className="challenge-history-list">
            {challenges.map(c => {
              const status = getStatus(c);
              return (
                <div key={c.id} className={`challenge-history-item ${status}`} onClick={() => handleView(c.id)}>
                  <div className="ch-item-top">
                    <span className="ch-item-diff">{c.difficulty}</span>
                    <span className="ch-item-date">{new Date(c.created_at).toLocaleDateString()}</span>
                    <span className={`ch-item-status ${status}`}>
                      {status === 'completed' ? '✅' : status === 'waiting' ? '⏳' : '📝'}
                    </span>
                  </div>
                  <div className="ch-item-scores">
                    <span>{c.created_by_name}: {c.creator_score !== null ? `${c.creator_score}/${c.round_count}` : '—'} {formatTime(c.creator_time_ms)}</span>
                    {c.challenger_name && (
                      <span>{c.challenger_name}: {c.challenger_score !== null ? `${c.challenger_score}/${c.round_count}` : '—'} {formatTime(c.challenger_time_ms)}</span>
                    )}
                    {!c.challenger_name && status === 'waiting' && (
                      <span className="ch-item-waiting">Waiting for friend...</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
