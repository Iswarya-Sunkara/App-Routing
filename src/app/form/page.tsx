'use client';

import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    setError('');
    setSuccess('');

    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    setSuccess('User registered successfully');
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text"  value={email} onChange={(e) => setEmail(e.target.value)} required /> <br/> <br/>
        <button type="submit">Sign Up</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}
