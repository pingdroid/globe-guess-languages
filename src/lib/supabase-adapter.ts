import { supabase } from './supabase-client';
import { setItem as setLocalItem, getItem as getLocalItem } from './stats-adapter';

export async function fetchRemoteStats(userId: string) {
  const { data, error } = await supabase.from('user_stats').select('stats').eq('user_id', userId).maybeSingle();
  if (error) throw error;
  return data?.stats ?? null;
}

export async function upsertRemoteStats(userId: string, stats: any) {
  const { error } = await supabase.from('user_stats').upsert({ user_id: userId, stats });
  if (error) throw error;
}

export function makeSupabaseAdapter(userId: string) {
  return {
    getItem: (k: string) => {
      // keep local copy for synchronous reads
      return getLocalItem(k);
    },
    setItem: (k: string, v: string) => {
      try { setLocalItem(k, v); } catch {}
      // asynchronously push to Supabase
      (async () => {
        try {
          // we store a single row per user with a `stats` json column
          if (k === 'languess_stats_v1') {
            const parsed = JSON.parse(v);
            await upsertRemoteStats(userId, parsed);
          } else {
            // fallback: store other keys as individual rows
            await supabase.from('user_kv').upsert({ user_id: userId, key: k, value: v });
          }
        } catch (e) {
          // ignore transient errors (could queue/retry)
          console.error('supabase sync failed', e);
        }
      })();
    },
    removeItem: (k: string) => { try { setLocalItem(k, ''); } catch {} }
  };
}
