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
    <div className="auth-modal">
      <h3>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</h3>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">{mode === 'signin' ? 'Sign In' : 'Create Account'}</button>
      </form>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>{mode === 'signin' ? 'Create account' : 'Have an account? Sign in'}</button>
        <button onClick={() => { playAsGuest(); onClose?.(); }} style={{ marginLeft: 8 }}>Play as Guest</button>
      </div>
    </div>
  );
}
