import { useState } from 'react';
import { recordAction } from '../utils/hedera';

export default function RecordAction() {
  const [action, setAction] = useState({ type: '', proof: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await recordAction(action);
    alert(result ? 'Action recorded successfully!' : 'Failed to record action.');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Record an Environmental Action</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Action Type:
          <input
            type="text"
            value={action.type}
            onChange={(e) => setAction({ ...action, type: e.target.value })}
            required
          />
        </label>
        <br />
        <label>
          Proof (e.g., image URL):
          <input
            type="url"
            value={action.proof}
            onChange={(e) => setAction({ ...action, proof: e.target.value })}
            required
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
}
