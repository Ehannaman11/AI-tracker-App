import { useState } from "react";
import Landing from "./screens/Landing.jsx";
import Setup from "./screens/Setup.jsx";
import Session from "./screens/Session.jsx";

export default function App() {
  const [screen, setScreen] = useState("landing"); // "landing" | "setup" | "session"
  const [minutes, setMinutes] = useState(30);

  if (screen === "setup") {
    return (
      <Setup
        onGo={(chosenMinutes) => {
          setMinutes(chosenMinutes);
          setScreen("session");
        }}
      />
    );
  }

  if (screen === "session") {
    return <Session minutes={minutes} onStop={() => setScreen("landing")} />;
  }

  return <Landing onStart={() => setScreen("setup")} />;
}
