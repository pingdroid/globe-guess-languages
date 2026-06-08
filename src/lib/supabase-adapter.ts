  import { supabase } from './supabase-client';

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
        try { return localStorage.getItem(k); } catch { return null; }
      },
      setItem: (k: string, v: string) => {
        try { localStorage.setItem(k, v); } catch {}
        setTimeout(() => {
          (async () => {
            try {
              if (k === 'languess_stats_v1') {
                const parsed = JSON.parse(v);
                await upsertRemoteStats(userId, parsed);
              } else {
                await supabase.from('user_kv').upsert({ user_id: userId, key: k, value: v });
              }
            } catch (e) {
              console.error('supabase sync failed', e);
            }
          })();
        }, 0);
      },
      removeItem: (k: string) => { try { localStorage.removeItem(k); } catch {} }
    };
  }
