import React, { useState, useEffect } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You are clicked ${count} times.`;
  });

  return (
    <div>
      <p>You are clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Home;
