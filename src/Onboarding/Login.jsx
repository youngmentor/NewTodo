import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import LoginImg from './Login.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate= useNavigate()
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
      <form onSubmit={handleSubmit} className='LoginForm'>
        <div className='LoginInputDiv'>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            className='LoginInput'
          />
        </div>
        <div className='LoginInputDiv'>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className='LoginInput'
          />
        </div>
        <button type="submit" className='LoginBttn'>Login</button>
        <span>Don't have an account yet? <b onClick={() => navigate("/signup")}>create accout</b></span>
      </form>
      </div>
    </div>
  );
};

export default Login;
