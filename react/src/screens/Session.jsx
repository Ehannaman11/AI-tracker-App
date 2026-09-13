import { useEffect, useState } from "react";
import Logo from "../Logo.jsx";
import "./Session.css";

const TIPS = [
  ["Say what it’s for:", "6 of your 9 prompts gave no audience, goal, or format."],
  ["Ask one thing at a time:", "Your longest prompt asked for four things at once."],
  ["Ask for the reasoning:", "Seeing the steps is how you catch a wrong answer."],
  ["Push back once:", "You followed up on only 2 of 9 answers."],
  ["Show an example:", "One sample of what “good” looks like beats describing it."],
];

function fmt(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
}

export default function Session({ minutes, onStop }) {
  const isVariable = minutes === 0;
  const [remaining, setRemaining] = useState(isVariable ? 0 : minutes * 60);
  const [elapsed, setElapsed] = useState(0);

  const [tipIndex, setTipIndex] = useState(0);
  const [checking, setChecking] = useState(false);
  const [fading, setFading] = useState(false);
  const done = tipIndex >= TIPS.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed((e) => e + 1);
      if (!isVariable) setRemaining((r) => Math.max(0, r - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isVariable]);

  function completeTip() {
    if (fading || done) return;
    setChecking(true);
    setFading(true);
    setTimeout(() => {
      setTipIndex((i) => i + 1);
      setChecking(false);
      setFading(false);
    }, 210);
  }

  const clockText = isVariable ? fmt(elapsed) : fmt(remaining);

  return (
    <div className="screen">
      <div className="top-row">
        <Logo />
        <span className="live">
          <i />
          <span className="clock">{clockText}</span>
        </span>
      </div>

      <div className="rating">
        <div className="grade">B&#8722;</div>
        <div className="txt">
          <b>Solid start</b>
          <small>You ask clear questions, but you take the first answer as final.</small>
        </div>
      </div>

      <div className="tipwrap">
        <div className="tipcard" style={{ opacity: fading ? 0 : 1 }}>
          {!done && (
            <div className="tip-flag">
              <svg width="19" height="19" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="none" stroke="#F5C044" strokeWidth="1.5" />
                <path d="M8 4.2v4.5" fill="none" stroke="#F5C044" strokeWidth="1.9" strokeLinecap="round" />
                <circle cx="8" cy="11.6" r="1" fill="#F5C044" />
              </svg>
              <span>
                Quick
                <br />
                Tip!
              </span>
            </div>
          )}
          <div className={`tip-body${done ? " done" : ""}`}>
            <div className="tip-text">
              <b>{done ? "All caught up" : TIPS[tipIndex][0]}</b>
              <span>
                {done
                  ? "Keep going — new suggestions appear as you work."
                  : TIPS[tipIndex][1]}
              </span>
            </div>
            {!done && (
              <button
                className={`tip-check${checking ? " on" : ""}`}
                type="button"
                aria-label="Mark this tip done"
                onClick={completeTip}
              />
            )}
          </div>
        </div>
      </div>

      <div className="divider" />

      <div className="stats">
        <div className="stat">
          <b>{fmt(elapsed)}</b>
          <small>Elapsed</small>
        </div>
        <div className="stat">
          <b>9</b>
          <small>Prompts</small>
        </div>
        <div className="stat">
          <b>2</b>
          <small>Follow-ups</small>
        </div>
      </div>

      <button className="btn btn-stop" type="button" onClick={onStop}>
        Stop Tracking
      </button>
    </div>
  );
}
