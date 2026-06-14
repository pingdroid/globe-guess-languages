import { useState, useEffect, useRef } from 'react';
import { useUser } from '../../stores/user-store';
import { toast } from 'sonner';

export default function AuthModal({ onClose }: { onClose?: () => void }) {
  const { signIn, signUp, playAsGuest } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setError(null);
    setSubmitting(true);
    try {
      if (mode === 'signin') await signIn(email, password);
      else await signUp(email, password, email.split('@')[0] || 'player');
      toast.success(mode === 'signin' ? 'Welcome back!' : 'Account created');
      onClose?.();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Authentication failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="auth-overlay" role="dialog" aria-modal="true" aria-labelledby="auth-modal-title" onClick={onClose}>
      <div className="auth-modal" onClick={e => e.stopPropagation()}>
        <button
          ref={closeRef}
          type="button"
          className="auth-modal-close"
          onClick={onClose}
          aria-label="Close sign in dialog"
        >
          ×
        </button>

        <h3 id="auth-modal-title" className="auth-modal-title">
          {mode === 'signin' ? 'Welcome back' : 'Create account'}
        </h3>
        <p className="auth-modal-subtitle">
          {mode === 'signin' ? 'Sign in to sync your progress across devices.' : 'Sign up to save your stats across devices.'}
        </p>

        <form onSubmit={submit} className="auth-form" noValidate>
          <label className="auth-field-label" htmlFor="auth-email">Email</label>
          <input
            id="auth-email"
            className="auth-input"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label className="auth-field-label" htmlFor="auth-password">Password</label>
          <input
            id="auth-password"
            className="auth-input"
            type="password"
            autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          {error && (
            <div className="auth-error" role="alert" aria-live="polite">
              {error}
            </div>
          )}

          <button type="submit" className="auth-submit-btn" disabled={submitting}>
            {submitting ? 'Please wait…' : mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <button
          type="button"
          className="auth-guest-btn"
          onClick={() => { playAsGuest(); onClose?.(); }}
        >
          Continue as guest
        </button>

        <div className="auth-modal-footer">
          <button
            type="button"
            className="auth-link-btn"
            onClick={() => { setError(null); setMode(mode === 'signin' ? 'signup' : 'signin'); }}
          >
            {mode === 'signin' ? "Don't have an account? Sign up" : 'Have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}
