import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const createAcc = () => {
      navigate('/signup'); 
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here (e.g., API call)
        console.log('Username:', username, 'Password:', password);
        // Reset the form or handle success/failure
        setUsername('');
        setPassword('');
    };
    return (
        <div className="signin-container scale-100 py-10">
        <h1>Sign In  to Your Account</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10px' }}>
          <a 
            style={{ textDecoration: 'underline', cursor: 'pointer' }} 
            className='text-bluelight' 
            onClick={createAcc}
          >
          Create Account
          </a>
          </div>
          <br />
          <button type="submit" className="signin-button">Sign In</button>
        </form>
      </div>
    );
};

export default SignIn;
