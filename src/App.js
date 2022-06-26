import React, { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  const getUsers = useCallback(() => {
    return fetch('https://reqres.in/api/users');
  }, []);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>

      <ChildComponent getUsers={getUsers} />
    </div>
  );
}
