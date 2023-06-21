import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import LoginImg from './Login.png'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate= useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked")

    try {
      const response = await axios.post('https://todo-list-ns19.onrender.com/api/login', {
        username,
        password,
      });
      console.log(response.data);
      setUsername('');
      setPassword('');
      response.data.username === username.username ?  navigate('/todo') : null
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
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={handleUserNameChange}
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
