import "./Queue.css";

export default function Queue({ queue }) {
  const requests = queue.map(({ name, helpTopic, requestID }) => (
    <li key={requestID}>
      <p>
        <strong>{name}:</strong> {helpTopic}
      </p>
    </li>
  ));

  return (
    <div className="Queue">
      <h3>Help Queue</h3>
      <ul>{requests}</ul>
    </div>
  );
}
