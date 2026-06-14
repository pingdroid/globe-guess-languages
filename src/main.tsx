import React from 'react';
import ReactDOM from 'react-dom/client';
import { Game } from './components/game/Game';
import { UserProvider } from './stores/user-store';
import './styles.css';
import './styles/game.css';

// Detect challenge URL parameter
const urlParams = new URLSearchParams(window.location.search);
const challengeParam = urlParams.get('challenge');
if (challengeParam) {
  // Store for Game to pick up
  (window as any).__pendingChallenge = challengeParam;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <Game />
    </UserProvider>
  </React.StrictMode>
);
