import React, { useState, useEffect } from 'react';

import UserService from '../services/UserService';

import { setUserLocal } from '../utils/store';

import loginImage from '../assets/images/login_image.svg';

import '../assets/styles/pages/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // calls this when logging in
  const onSignin = () => {
    const user = {
      username,
      password
    };

    if(username === '') {
      setErrorMessage("Username is empty");
      return;
    }

    if(password === '') {
      setErrorMessage("Password is empty");
      return;
    }

    UserService.postLogin(user)
      .then((res) => {
        if(res.status === 200) {
          const user = {
            username,
            userType: res.data.userType,
          }
          setUserLocal(user);
          window.location.reload();
        } 
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setErrorMessage("Invalid username or password");  
        }
      })
  }

  return <div id="login-page">
    <div className="card">
      <p className="title">Login</p>
      <p className="sub-title">Welcome back!</p>
      <input 
        type="text" 
        placeholder="Username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && onSignin()}
      />
      <input 
        type="password" 
        placeholder="Password"
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && onSignin()}
      />
      <p className="error-message">{errorMessage}</p>
      <img src={loginImage} alt="Login" />
      <button onClick={() => onSignin()}>Sign in</button>
    </div>
  </div>
}

export default Login;