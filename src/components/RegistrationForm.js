import React, { useState } from 'react';
import Input from './Inputs';

const RegistrationForm = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    onRegister(username, password);
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
      <Input
        name='confirmPassword'
        inputType='password'
        value={confirmPassword}
        changed={(e) => setConfirmPassword(e.target.value)}
        label='Confirm Password'
      />
      <button type='submit'>Register</button>
    </form>
  );
};

export default RegistrationForm;