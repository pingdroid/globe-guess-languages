import { useState } from 'react';
import { useUser } from '../../stores/user-store';

export default function AuthModal({ onClose }: { onClose?: () => void }) {
  const { signIn, signUp, playAsGuest } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'signin'|'signup'>('signin');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (mode === 'signin') await signIn(email, password);
      else await signUp(email, password);
      onClose?.();
    } catch (err: any) {
      console.error(err);
      const message = err?.message || 'Auth failed';
      alert(`Auth failed: ${message}`);
    }
  }

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <h3 className="auth-modal-title">{mode === 'signin' ? 'Welcome back' : 'Create account'}</h3>
        <p className="auth-modal-subtitle">{mode === 'signin' ? 'Sign in to sync your progress.' : 'Sign up to save your stats across devices.'}</p>
        <form onSubmit={submit} className="auth-form">
          <input className="auth-input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input className="auth-input" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type="submit" className="auth-submit-btn">{mode === 'signin' ? 'Sign In' : 'Create Account'}</button>
        </form>
        <div className="auth-modal-footer">
          <button className="auth-link-btn" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
            {mode === 'signin' ? 'Create account' : 'Have an account? Sign in'}
          </button>
          <button className="auth-link-btn" onClick={() => { playAsGuest(); onClose?.(); }}>Play as Guest</button>
        </div>
      </div>
    </div>
  );
}
