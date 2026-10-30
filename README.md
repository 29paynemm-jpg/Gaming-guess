# Guess the Game

A fast, mobile-friendly character trivia game built with Next.js, React, TypeScript, and Tailwind CSS. Identify the game a character belongs to, build a streak, and try to beat your personal records.

## Features

- One character and four shuffled game titles per round.
- Three unique wrong answers drawn from the same curated game pool.
- A shuffled character deck avoids repeats until the pool has been played; the next deck avoids starting with the previous character.
- Correct answers earn 100 points plus a streak bonus of 10 points per consecutive answer, capped at 50 bonus points per answer.
- One incorrect answer ends the run and reveals the right game.
- Best score and best streak are saved in browser `localStorage`.
- Responsive layouts, keyboard-accessible answer buttons, and reduced-motion support.

## Requirements

- Node.js 20.9 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run typecheck
npm run build
npm start
```

There are no required environment variables or external services.

## Game logic

The character and game-title pool lives in `data/characters.ts`. `lib/game.ts` chooses the next available character, creates three distinct distractor titles, shuffles all four choices, and calculates streak points. `app/page.tsx` manages each run and persists the record totals. Records are stored under the `guess-the-game-records` key in local storage on the current browser.

## Project structure

```text
app/
  globals.css       Tailwind layers and global visual styles
  layout.tsx        Root layout, fonts, and page metadata
  page.tsx          Game state and screen routing
components/
  GameOverScreen.tsx
  GameScreen.tsx
  StartScreen.tsx
data/
  characters.ts     Curated character-to-game dataset
lib/
  game.ts           Question generation and scoring helpers
```
