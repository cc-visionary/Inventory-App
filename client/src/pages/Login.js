import React, { useState } from 'react';

import UserService from '../services/UserService';

import { setUserLocal } from '../utils/store';

import loginImage from '../assets/images/login_image.svg';

import '../assets/styles/pages/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onClick = () => {
    const user = {
      username,
      password
    };

    UserService.postLogin(user)
      .then((res) => {
        const { success, result } = res.data;
        console.log(success);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return <div className="container">
    <div className="card">
      <p className="title">Login</p>
      <p className="sub-title">Welcome back!</p>
      <input 
        type="text" 
        placeholder="Username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <p className="error-message">{errorMessage}</p>
      <img src={loginImage} alt="Login" />
      <button onClick={() => onClick()}>Sign in</button>
    </div>
  </div>
}

export default Login;