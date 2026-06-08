import { useState, useRef, useEffect } from 'react';
import { useGame } from '../../stores/game-store';
import { formatElapsedTime } from '../../engine/game-engine';
import { getLanguageById } from '../../data/languages';

export function PlayScreen() {
  const { state, dispatch } = useGame();
  const [textGuess, setTextGuess] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const cfg = state.cfg!;
  const correctLang = state.currentLangId ? getLanguageById(state.currentLangId) : null;
  const [timerMs, setTimerMs] = useState(state.finalTimeMs ?? 0);
  const [countdownSeconds, setCountdownSeconds] = useState(10);

  useEffect(() => {
    if (state.phase === 'playing' || state.runStartAt !== null) {
      const update = () => {
        if (state.runStartAt !== null) {
          setTimerMs(Date.now() - state.runStartAt);
        }
      };
      update();
      const interval = window.setInterval(update, 50);
      return () => window.clearInterval(interval);
    }
    setTimerMs(state.finalTimeMs ?? 0);
  }, [state.runStartAt, state.phase, state.finalTimeMs]);

  useEffect(() => {
    if (state.phase === 'playing' && cfg.inputType === 'text') {
      setTextGuess('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [state.currentSentence, state.phase]);

  useEffect(() => {
    if (state.phase === 'final-loss-revealed') {
      setCountdownSeconds(10);
      const interval = window.setInterval(() => {
        setCountdownSeconds(prev => {
          if (prev <= 1) {
            dispatch({ type: 'LOSS_TIMEOUT' });
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => window.clearInterval(interval);
    }
  }, [state.phase, dispatch]);

  const handleButtonGuess = (langId: string) => {
    if (state.phase !== 'playing') return;
    dispatch({ type: 'GUESS', guessValue: langId, inputMode: 'buttons' });
  };

  const handleTextSubmit = () => {
    if (state.phase !== 'playing' || !textGuess.trim()) return;
    dispatch({ type: 'GUESS', guessValue: textGuess, inputMode: 'text' });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT_ROUND' });
  };

  // Progress pips
  const correctPips = Array.from({ length: cfg.winTarget }, (_, i) => (
    <div key={`c${i}`} className={`pip ${i < state.correctCount ? 'correct' : ''}`} />
  ));
  const wrongPips = Array.from({ length: cfg.wrongLimit }, (_, i) => (
    <div key={`w${i}`} className={`pip ${i < state.wrongCount ? 'wrong' : ''}`} />
  ));

  return (
    <div className="play-screen">
      <div className="game-nav">
        <button className="quit-btn" onClick={() => dispatch({ type: 'QUIT' })}>← Menu</button>
      </div>

      <div className="scoreboard">
        <div className="score-item"><div className="score-label">Correct</div><div className="score-pips">{correctPips}</div></div>
        <div className="score-item"><div className="score-label">Lives</div><div className="score-pips">{wrongPips}</div></div>
        <div className="score-item timer-item"><div className="score-label">Time</div><div className="timer-value">{formatElapsedTime(timerMs)}</div></div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${(state.correctCount / cfg.winTarget) * 100}%` }} />
      </div>

      <div className={`sentence-card ${state.phase === 'revealed' ? 'flash' : ''}`}>
        <div className="sentence-text">{state.currentSentence}</div>
        {state.hint && <div className="hint-badge visible">{state.hint}</div>}
      </div>

      {/* Input area */}
      {state.phase === 'playing' && cfg.inputType === 'buttons' && (
        <div className="options-grid">
          {state.options.map(id => {
            const lang = getLanguageById(id)!;
            return (
              <button key={id} className="option-btn" onClick={() => handleButtonGuess(id)}>
                {lang.name}
              </button>
            );
          })}
        </div>
      )}

      {state.phase === 'playing' && cfg.inputType === 'text' && (
        <div className="text-input-container">
          <input
            ref={inputRef}
            className="text-input"
            value={textGuess}
            onChange={e => setTextGuess(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleTextSubmit()}
            placeholder="Type language name..."
          />
          <button className="text-submit-btn" onClick={handleTextSubmit}>GUESS</button>
        </div>
      )}

      {/* Revealed state */}
      {(state.phase === 'revealed' || state.phase === 'final-loss-revealed') && (
        <>
          {cfg.inputType === 'buttons' && (
            <div className="options-grid">
              {state.options.map(id => {
                const lang = getLanguageById(id)!;
                let cls = 'option-btn';
                if (id === state.currentLangId) cls += ' correct-answer';
                return <button key={id} className={cls} disabled>{lang.name}</button>;
              })}
            </div>
          )}

          {cfg.inputType === 'text' && (
            <div className={`text-input-container ${state.lastGuessCorrect ? 'correct' : 'wrong'}`}>
              <input className="text-input" disabled value={state.lastGuessCorrect ? correctLang!.name : `Wrong (It was ${correctLang!.name})`} />
            </div>
          )}

          <div className={`feedback ${state.lastGuessCorrect ? 'correct' : 'wrong'}`}>
            {state.lastGuessCorrect ? '✓ Correct! Well done.' : `✗ That was ${correctLang!.name}.`}
          </div>

          {correctLang && (
            <div className="explanation-panel visible">
              <div className="ep-title">{correctLang.name}</div>
              <div className="ep-grid">
                <div className="ep-item"><span className="ep-label">Family</span><span>{correctLang.family}</span></div>
                <div className="ep-item"><span className="ep-label">Region</span><span>{correctLang.region}</span></div>
                <div className="ep-item"><span className="ep-label">Script</span><span>{correctLang.script}</span></div>
                <div className="ep-item"><span className="ep-label">Confused with</span><span>{correctLang.confusedWith.join(', ')}</span></div>
              </div>
              <div className="ep-clue"><span className="ep-label">Visual Clue</span><span>{correctLang.clue}</span></div>
            </div>
          )}

          {state.phase === 'revealed' && (
            <button className="action-btn visible" onClick={handleNext}>Next Sentence →</button>
          )}

          {state.phase === 'final-loss-revealed' && (
            <div className="final-loss-countdown">
              <button className="skip-countdown-btn" onClick={() => dispatch({ type: 'LOSS_TIMEOUT' })}>Skip →</button>
              <div className="countdown-message">Redirecting to game over screen in...</div>
              <div className="countdown-timer">{countdownSeconds}s</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
