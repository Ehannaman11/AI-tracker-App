import Logo from "../Logo.jsx";
import "./Landing.css";

export default function Landing({ onStart }) {
  return (
    <div className="screen">
      <Logo big />

      <div className="s1-body">
        <h2>Control the bot. Don’t let it control you.</h2>
        <p>See how you prompt. Get feedback to get better at it.</p>
      </div>

      <button className="btn btn-go" type="button" onClick={onStart}>
        Start Tracking*
      </button>
      <p className="foot-note">*Only runs while you turn it on.</p>
    </div>
  );
}
