# Languess 🌍

A language guessing game. You're shown a sentence in a mystery language — guess which language it is.

**Play now:** [globe-guess-languages1.pages.dev](https://globe-guess-languages1.pages.dev)

## How It Works

1. Pick a difficulty level
2. Read a sentence in an unknown language
3. Guess which language it is (buttons or free text depending on difficulty)
4. Reach the win target before running out of lives

## Difficulty Levels

| Level | Languages | Win Target | Lives | Input | Hint |
|---|---|---|---|---|---|
| Easy | Tier 1–2 (24) | 5 correct | 3 | Multiple choice (4 options) | Region shown |
| Medium | Tier 1–3 (33) | 7 correct | 3 | Multiple choice (4 options) | None |
| Hard | Tier 1–4 (42) | 10 correct | 3 | Free text | None |
| Expert | Tier 2–4 (32) | 15 correct | 1 | Free text | None |

## Languages

42 languages across 4 difficulty tiers:

- **Tier 1** (10): Common, widely recognisable scripts/sounds — Spanish, French, German, Italian, Portuguese, Russian, Japanese, Mandarin, Arabic, Hindi
- **Tier 2** (14): Recognisable with some exposure — Korean, Swedish, Dutch, Greek, Polish, Turkish, Vietnamese, Thai, Hebrew, Finnish, Indonesian, Czech, Danish, Swahili
- **Tier 3** (9): Less commonly encountered — Hungarian, Romanian, Ukrainian, Bengali, Tamil, Tagalog, Persian, Amharic, Estonian
- **Tier 4** (9): Challenging, obscure or visually similar to others — Icelandic, Georgian, Armenian, Basque, Welsh, Hawaiian, Maori, Mongolian, Esperanto

Each language has 15–20 example sentences.

## Game Mechanics

- **Weighted random selection** — recently-seen languages are deprioritised (recency penalty)
- **Fuzzy matching** for text input — allows 1–2 typos via Levenshtein distance
- **Stats tracking** — games, wins, accuracy, streaks, mastered languages, best time per difficulty
- **Personal bests** — tracked per difficulty level with completion time

## Auth & Cloud Sync

- **Guest mode** — play without an account, stats saved in browser (localStorage)
- **Account mode** — sign up with username/email/password, stats synced to cloud via Supabase
- **Cross-device** — sign in on any device to see your stats
- **Merge on first sign-in** — guest stats are merged once into your account

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, custom game CSS
- **Auth & DB**: Supabase (auth + user_stats table)
- **Hosting**: Cloudflare Pages (static SPA)
- **State**: React Context + useReducer (no external state library)

## Project Structure

```
src/
├── main.tsx                    # Entry point
├── components/
│   ├── game/
│   │   ├── Game.tsx            # Root component + router
│   │   ├── StartScreen.tsx     # Difficulty selection
│   │   ├── PlayScreen.tsx      # Active gameplay
│   │   └── EndScreen.tsx       # Win/lose results
│   └── auth/
│       ├── AuthModal.tsx       # Sign-in / sign-up form
│       └── ProfileMenu.tsx     # User profile dropdown
├── engine/
│   ├── game-engine.ts          # Core logic: selection, matching, scoring, stats
│   └── high-scores.ts          # High score utilities
├── stores/
│   ├── game-store.tsx          # Game state machine (useReducer)
│   └── user-store.tsx          # Auth state + session management
├── lib/
│   ├── stats-adapter.ts        # Pluggable storage adapter interface
│   ├── supabase-adapter.ts     # Supabase implementation of stats adapter
│   └── supabase-client.ts      # Supabase client initialisation
├── data/
│   └── languages.ts            # 42 languages × 15-20 sentences
└── styles/
    └── game.css                # Game-specific styles
```

## Development

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

## Deployment

Automatically deployed to Cloudflare Pages on push to `main`. Build output: `dist/`.

## Environment Variables

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

These are public (anon) keys — safe to commit. Row-level security on Supabase handles access control.
