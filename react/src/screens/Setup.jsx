import { useState } from "react";
import Logo from "../Logo.jsx";
import BackLink from "../BackLink.jsx";
import "./Setup.css";

const OPTIONS = [
  { minutes: 30, name: "30 minutes", hint: "30:00" },
  { minutes: 60, name: "1 hour", hint: "60:00" },
  { minutes: 0, name: "Variable", hint: "until I stop" },
];

export default function Setup({ onGo, onBack }) {
  const [selected, setSelected] = useState(30);

  return (
    <div className="screen">
      <Logo />
      <BackLink onBack={onBack} />

      <h2 className="s2-title">How long should I track?</h2>
      <p className="s2-sub">Tracking stops on its own when time runs out.</p>

      <div className="opts">
        {OPTIONS.map((opt) => (
          <div
            key={opt.minutes}
            className={`opt${selected === opt.minutes ? " on" : ""}`}
            onClick={() => setSelected(opt.minutes)}
            role="radio"
            aria-checked={selected === opt.minutes}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelected(opt.minutes);
              }
            }}
          >
            <span className="dot" />
            <span className="name">{opt.name}</span>
            <span className="hint">{opt.hint}</span>
          </div>
        ))}
      </div>

      <div className="s2-spacer" />
      <button className="btn btn-go" type="button" onClick={() => onGo(selected)}>
        Go!
      </button>
    </div>
  );
}
