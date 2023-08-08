import React, { useState } from 'react';
import Input from './Inputs';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='username'
        inputType='text'
        value={username}
        changed={(e) => setUsername(e.target.value)}
        label='Username'
      />
      <Input
        name='password'
        inputType='password'
        value={password}
        changed={(e) => setPassword(e.target.value)}
        label='Password'
      />
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;