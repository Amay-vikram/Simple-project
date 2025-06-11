import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    if (count < 999) setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReset} style={{ marginLeft: '10px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;