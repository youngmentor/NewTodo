import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUp.css'
import SignUpImg from './SignUpI.jpeg'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate= useNavigate()
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');


  const handleSignup = async (e) => {

    try {
      
      console.log(username)
      e.preventDefault();
      const response = await axios.post('https://todo-list-ns19.onrender.com/api/signup ', {username, password});
      console.log(response)
      console.log( response.data);
      response.status === 201 ? navigate("/") : null 
      setUserName('');
      setPassword('');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  
  // useEffect(() => {

  // }, [form])
  return (
    <div className='SignUpMain'>
      <div className='SignUpLeft'>
         <img src={SignUpImg} className='SignUpImage' />
      </div>
      <div className='SignUpRight'>
        <h2>Signup</h2>
        <form onSubmit={handleSignup} className='SignUpForm'>
          <div className='SignUpInputDiv'>
            <label>Username</label>
            <input
              type="text"
              id="firstName"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className='SignUpInput'
            />
          </div>
          <div className='SignUpInputDiv'>
            <label>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='SignUpInput'
            />
          </div>
          <button type="submit" className='SignUpBttn'>Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
