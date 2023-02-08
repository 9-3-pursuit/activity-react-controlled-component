import QueueSignupForm from "./QueueSignupForm.js";
import Queue from "./Queue.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [queue, setQueue] = useState([
    { name: "Myra", helpTopic: "Designing a grid template for my app" },
  ]);

  return (
    <div className="App">
      <header className="Header">
        <h1>Help Request Queue</h1>
      </header>
      <QueueSignupForm setQueue={setQueue} />
      <Queue queue={queue} />
    </div>
  );
}

export default App;
