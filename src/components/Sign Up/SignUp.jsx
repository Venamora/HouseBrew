import React, { useState } from 'react';
import './SignUp.css';

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      email,
      username,
      password,
    });
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className='font-bold font-sans text-2xl'>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name :</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Username :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p>
            Already have an account?{' '}
            <a href="/signin" className="signin-link">
              Sign in
            </a>
          </p>
          <button type="submit" className="signup-button">
            Sign in
          </button>
          
        </form>
        <br />
      </div>
    </div>
  );
};

export default Signup;
