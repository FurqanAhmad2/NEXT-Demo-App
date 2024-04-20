// app/CounterPage.tsx
"use client"
import React, { useState } from 'react';

const CounterPage: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterPage;
