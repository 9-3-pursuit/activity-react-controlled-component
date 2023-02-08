import "./QueueSignupForm.css";
import { useState } from "react";

export default function QueueSignupForm({ setQueue }) {
  const [newRequest, setNewRequest] = useState({
    name: "",
    helpTopic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: use setQueue to add a new help request to the queue
  };

  const handleTextChange = (e) => {
    // TODO: use setNewRequest to update the value of the form inputs
  };

  return (
    <div className="QueueSignupForm">
      <form
        onSubmit={() => console.log("replace me with your own submit handler")}
      >
        <label htmlFor="name">Name: </label>
        <input
          value={newRequest.name}
          onChange={() =>
            console.log("replace me with your own text change handler")
          }
          placeholder="Name..."
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="helpTopic">
          Briefly describe what you need help with:
        </label>
        <input
          value={newRequest.helpTopic}
          onChange={() =>
            console.log("replace me with your own text change handler")
          }
          placeholder="I need help with..."
          type="text"
          name="helpTopic"
          id="helpTopic"
        />
        <input type="submit" value="Join Queue" />
      </form>
    </div>
  );
}
