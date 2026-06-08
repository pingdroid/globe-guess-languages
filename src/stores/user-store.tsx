import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { supabase } from '../lib/supabase-client';
import { setStatsAdapter } from '../lib/stats-adapter';
import { makeSupabaseAdapter, fetchRemoteStats, upsertRemoteStats } from '../lib/supabase-adapter';

type User = { id: string; email?: string } | null;

const UserContext = createContext<{
  user: User;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  playAsGuest: () => void;
  isGuest: boolean;
  initialized?: boolean;
} | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [isGuest, setIsGuest] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    let mounted = true;
    // initialize session and listen for changes
    (async () => {
      try {
        const { data } = await supabase.auth.getSession();
        const session = data.session;
        if (!mounted) return;
        if (session && session.user) {
          setUser({ id: session.user.id, email: session.user.email ?? undefined });
          setIsGuest(false);
          setStatsAdapter(makeSupabaseAdapter(session.user.id));
          setInitialized(true);
        } else {
          // default to guest adapter
          setUser(null);
          setIsGuest(true);
          setStatsAdapter({
            getItem: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
            setItem: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
            removeItem: (k) => { try { localStorage.removeItem(k); } catch {} }
          });
        }
      } catch (e) {
        console.error('session init failed', e);
      }
    })();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      if (session && session.user) {
        setUser({ id: session.user.id, email: session.user.email ?? undefined });
        setIsGuest(false);
        setStatsAdapter(makeSupabaseAdapter(session.user.id));
        setInitialized(true);
      } else {
        setUser(null);
        setIsGuest(true);
        setStatsAdapter({
          getItem: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
          setItem: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
          removeItem: (k) => { try { localStorage.removeItem(k); } catch {} }
        });
      }
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    const u = data.user;
    setUser({ id: u.id, email: u.email ?? undefined });
    setIsGuest(false);
    // switch adapter to supabase-backed adapter
    setStatsAdapter(makeSupabaseAdapter(u.id));
    // merge local -> remote
    try {
      const remote = await fetchRemoteStats(u.id);
      const localRaw = localStorage.getItem('languess_stats_v1');
      const local = localRaw ? JSON.parse(localRaw) : null;
      if (local && !remote) {
        await upsertRemoteStats(u.id, local);
      } else if (local && remote) {
        // basic merge: sum counters, pick min best times, merge maps
        const merged = { ...remote };
        merged.games = (remote.games ?? 0) + (local.games ?? 0);
        merged.wins = (remote.wins ?? 0) + (local.wins ?? 0);
        merged.correctTotal = (remote.correctTotal ?? 0) + (local.correctTotal ?? 0);
        merged.wrongTotal = (remote.wrongTotal ?? 0) + (local.wrongTotal ?? 0);
        merged.currentStreak = Math.max(remote.currentStreak ?? 0, local.currentStreak ?? 0);
        merged.bestStreak = Math.max(remote.bestStreak ?? 0, local.bestStreak ?? 0);
        // pick earliest non-null bestTime
        merged.bestTimeMs = remote.bestTimeMs === null ? local.bestTimeMs : Math.min(remote.bestTimeMs ?? Infinity, local.bestTimeMs ?? Infinity);
        merged.langHistory = { ...(remote.langHistory ?? {}), ...(local.langHistory ?? {}) };
        await upsertRemoteStats(u.id, merged);
      }
      // clear legacy local copy if desired
      try { localStorage.removeItem('languess_stats_v1'); } catch {}
    } catch (e) {
      console.error('merge failed', e);
    }
  }

  async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    const u = data.user;
    setUser({ id: u!.id, email: u!.email ?? undefined });
    setIsGuest(false);
    setStatsAdapter(makeSupabaseAdapter(u!.id));
  }

  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
    setIsGuest(true);
    // revert to local adapter
    setStatsAdapter({
      getItem: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
      setItem: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
      removeItem: (k) => { try { localStorage.removeItem(k); } catch {} }
    });
  }

  function playAsGuest() {
    setUser(null);
    setIsGuest(true);
    setStatsAdapter({
      getItem: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
      setItem: (k, v) => { try { localStorage.setItem(k, v); } catch {} },
      removeItem: (k) => { try { localStorage.removeItem(k); } catch {} }
    });
  }

  return (
    <UserContext.Provider value={{ user, signIn, signUp, signOut, playAsGuest, isGuest, initialized }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
