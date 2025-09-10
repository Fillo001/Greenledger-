import { useEffect, useState } from 'react';
import { getActions } from '../utils/hedera';

export default function Actions() {
  const [actions, setActions] = useState([]);

  useEffect(() => {
    async function fetchActions() {
      const data = await getActions();
      setActions(data);
    }
    fetchActions();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Recorded Environmental Actions</h1>
      {actions.length === 0 ? (
        <p>No actions recorded yet.</p>
      ) : (
        <ul>
          {actions.map((action, index) => (
            <li key={index}>
              <strong>Action:</strong> {action.type}<br />
              <strong>Proof:</strong> <a href={action.proof} target="_blank">View</a><br />
              <strong>Date:</strong> {action.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
