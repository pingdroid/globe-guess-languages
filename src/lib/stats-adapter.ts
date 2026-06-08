type StorageAdapter = {
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
  removeItem?: (key: string) => void;
};

let adapter: StorageAdapter = {
  getItem: (k: string) => {
    try { return localStorage.getItem(k); } catch { return null; }
  },
  setItem: (k: string, v: string) => { try { localStorage.setItem(k, v); } catch {} },
  removeItem: (k: string) => { try { localStorage.removeItem(k); } catch {} },
};

export function setStatsAdapter(a: StorageAdapter) {
  adapter = a;
}

export function getItem(key: string): string | null {
  return adapter.getItem(key);
}

export function setItem(key: string, value: string): void {
  adapter.setItem(key, value);
}

export function removeItem(key: string): void {
  if (adapter.removeItem) adapter.removeItem(key);
}

// Example remote adapter (Supabase) — shown as reference for implementing cloud sync.
// It intentionally doesn't import supabase here so teams can choose how to wire keys securely.
/*
export function makeSupabaseAdapter(supabaseClient: any, userId: string) : StorageAdapter {
  return {
    getItem: (k) => {
      // keep a local copy for synchronous reads (optimistic). Real reads should be async.
      return localStorage.getItem(k);
    },
    setItem: (k, v) => {
      try { localStorage.setItem(k, v); } catch {}
      // fire-and-forget upload
      (async () => {
        await supabaseClient.from('user_stats').upsert({ user_id: userId, key: k, value: v });
      })();
    },
    removeItem: (k) => { try { localStorage.removeItem(k); } catch {} }
  };
}
*/
