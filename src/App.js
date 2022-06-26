import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const getUsers = () => {
    return fetch('https://reqres.in/api/users');
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ChildComponent getUsers={getUsers} />
    </div>
  );
}
/**
 * 1. Why ChildComponent re-render
 * 2. How to prevent ChildComponent re-render
 * 3. What are disadvantaged of your solution?
 */
