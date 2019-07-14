import React, { useState, useEffect } from 'react';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(name, password);
  };

  return (
    <ul>
      <li>
        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
      </li>
      <li>
        <input
          type="text"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </li>
      <li>
        <button onClick={handleLogin}>登录</button>
      </li>
    </ul>
  );
};

export default Login;
