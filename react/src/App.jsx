import { useEffect, useState } from "react";
import Landing from "./screens/Landing.jsx";
import Setup from "./screens/Setup.jsx";
import Session from "./screens/Session.jsx";

export default function App() {
  const [screen, setScreen] = useState("landing"); // "landing" | "setup" | "session"
  const [minutes, setMinutes] = useState(30);

  // Lifted up so the session keeps running (and can be resumed) even after
  // navigating back to the landing screen without hitting Stop Tracking.
  const [sessionActive, setSessionActive] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    if (!sessionActive) return;
    const timer = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(timer);
  }, [sessionActive]);

  function handleGo(chosenMinutes) {
    setMinutes(chosenMinutes);
    setElapsed(0);
    setTipIndex(0);
    setSessionActive(true);
    setScreen("session");
  }

  function handleStop() {
    setSessionActive(false);
    setScreen("landing");
  }

  if (screen === "setup") {
    return <Setup onGo={handleGo} onBack={() => setScreen("landing")} />;
  }

  if (screen === "session") {
    return (
      <Session
        minutes={minutes}
        elapsed={elapsed}
        tipIndex={tipIndex}
        onTipIndexChange={setTipIndex}
        onStop={handleStop}
        onBack={() => setScreen("landing")}
      />
    );
  }

  return (
    <Landing
      onStart={() => setScreen("setup")}
      sessionActive={sessionActive}
      onResume={() => setScreen("session")}
    />
  );
}
