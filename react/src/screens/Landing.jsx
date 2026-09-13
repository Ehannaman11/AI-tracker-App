import Logo from "../Logo.jsx";
import "./Landing.css";

export default function Landing({ onStart, sessionActive, onResume }) {
  return (
    <div className="screen">
      <Logo big />

      <div className="s1-body">
        <h2>Control the bot. Don’t let it control you.</h2>
        <p>See how you prompt. Get better at it.</p>
      </div>

      <button className="btn btn-go" type="button" onClick={onStart}>
        Start Tracking*
      </button>
      <p className="foot-note">*Only runs while you turn it on.</p>

      {sessionActive && (
        <button type="button" className="resume-link" onClick={onResume}>
          <i />
          Resume tracking session
          <svg width="11" height="9" viewBox="0 0 11 9" aria-hidden="true">
            <path
              d="M6 0.8 L10 4.5 L6 8.2 M9.7 4.5 H0.7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
