import { useState, useRef, useEffect } from 'react';
import { useUser } from '../../stores/user-store';

function Avatar({ email }: { email?: string }) {
  const initial = email ? email.charAt(0).toUpperCase() : '?';
  return (
    <div className="avatar-circle" style={{
      width: 36, height: 36, borderRadius: 18, background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
      display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-foreground)'
    }}>{initial}</div>
  );
}

export default function ProfileMenu() {
  const { user, isGuest, signOut, playAsGuest } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {isGuest ? (
        <div className="guest-pill" style={{ padding: '6px 10px', borderRadius: 9999, background: 'rgba(148,163,184,0.12)', color: 'var(--color-muted-foreground)', fontSize: 13 }}>👤 Guest Mode</div>
      ) : (
        <button onClick={() => setOpen(s => !s)} className="profile-btn" style={{ display: 'flex', gap: 8, alignItems: 'center', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <Avatar email={user?.email} />
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>{user?.email}</div>
        </button>
      )}

      {open && !isGuest && (
        <div className="profile-dropdown" style={{ position: 'absolute', right: 0, top: 44, minWidth: 220, background: 'var(--color-card)', borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.25)', padding: 12, zIndex: 40, transition: 'opacity 180ms ease' }}>
          <div style={{ fontSize: 13, color: 'var(--color-muted-foreground)', marginBottom: 8 }}>Signed in as</div>
          <div style={{ fontSize: 14, color: 'var(--color-foreground)', marginBottom: 12 }}>{user?.email}</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button onClick={async () => { await signOut(); setOpen(false); }} style={{ flex: 1, padding: '8px 10px', borderRadius: 6, background: 'linear-gradient(180deg, var(--color-secondary), var(--color-secondary))', color: 'var(--color-secondary-foreground)', border: 'none', cursor: 'pointer' }}>Log Out</button>
            <button onClick={() => { playAsGuest(); setOpen(false); }} style={{ padding: '8px 10px', borderRadius: 6, background: 'transparent', border: '1px solid var(--color-border)', color: 'var(--color-foreground)', cursor: 'pointer' }}>Switch to Guest</button>
          </div>
        </div>
      )}
    </div>
  );
}
