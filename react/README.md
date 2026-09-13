# AI Tracker

React + Vite version of the three widget screens (Landing → Setup → Session).

## Run it

```
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  main.jsx           entry point
  App.jsx            switches between the three screens, holds the chosen session length
  index.css          shared tokens (colors/fonts) + the .screen/.btn/.lockup base styles
  Logo.jsx           the "AI Tracker" wordmark, shared by all three screens
  screens/
    Landing.jsx / .css   screen 1 — intro + Start Tracking
    Setup.jsx   / .css   screen 2 — pick 30 min / 1 hour / variable
    Session.jsx / .css   screen 3 — live clock, rotating tip, stats, Stop Tracking
```

## Notes

- The countdown and tip rotation are wired up with real React state — no more static labels.
- Session data (grade, elapsed prompts, follow-ups) is still hardcoded sample data in `Session.jsx` — swap it for real tracking data whenever that's ready.
- Screen switching is local component state in `App.jsx`, not a router — simple for a 3-screen widget. If this grows into more pages, `react-router-dom` is the natural next step.
