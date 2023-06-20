import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'
import SignUpImg from './SignUpI.jpeg'
const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      // lastName,
      // email,
      password
    };

    try {
      const response = await axios.post('https://todo-list-ns19.onrender.com/api/signup ', user);
      console.log( response.data);

      setFirstName('');
      // setLastName('');
      // setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  return (
    <div className='SignUpMain'>
      <div className='SignUpLeft'>
         <img src={SignUpImg} className='SignUpImage' />
      </div>
      <div className='SignUpRight'>
        <h2>Signup</h2>
        <form onSubmit={handleSignup} className='SignUpForm'>
          <div className='SignUpInputDiv'>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='SignUpInput'
            />
          </div>
          {/* <div className='SignUpInputDiv'>
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='SignUpInput'
            />
          </div>
          <div className='SignUpInputDiv'>
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='SignUpInput'
            />
          </div> */}
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
