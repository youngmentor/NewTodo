import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import LoginImg from './Login.png'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', {
        email,
        password,
      });
      console.log(response.data);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='LoginMain'>
      <div className='LoginLeftDiv'>
         <img src={LoginImg} className='LoginImage'/>
      </div>
      <div className='LoginRightDiv'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
