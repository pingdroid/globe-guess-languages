import { useState, useRef, useEffect } from 'react';
import { useUser } from '../../stores/user-store';

function Avatar({ email }: { email?: string }) {
  const initial = email ? email.charAt(0).toUpperCase() : '?';
  return <div className="profile-avatar">{initial}</div>;
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
    <div ref={ref} className="profile-menu-root">
      {isGuest ? (
        <div className="profile-pill guest-pill">
          <span className="profile-pill-dot" />
          <span>Guest Mode</span>
        </div>
      ) : (
        <button onClick={() => setOpen(s => !s)} className="profile-pill profile-btn">
          <Avatar email={user?.email} />
          <span className="profile-pill-email">{user?.email}</span>
        </button>
      )}

      {open && !isGuest && (
        <div className="profile-dropdown">
          <div className="profile-dropdown-label">Signed in as</div>
          <div className="profile-dropdown-email">{user?.email}</div>
          <div className="profile-dropdown-actions">
            <button className="profile-dropdown-btn primary" onClick={async () => { await signOut(); setOpen(false); }}>Log Out</button>
            <button className="profile-dropdown-btn" onClick={() => { playAsGuest(); setOpen(false); }}>Switch to Guest</button>
          </div>
        </div>
      )}
    </div>
  );
}
