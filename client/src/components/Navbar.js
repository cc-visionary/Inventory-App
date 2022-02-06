import React from 'react';

import { UserService } from '../services';
import { getUser, removeLocalUser } from '../utils/store';

import '../assets/styles/components/Navbar.css';

const Navbar = ({ username }) => {
  const onLogout = () => {
    UserService.postLogout()
      .then((res) => {
        if(res.status === 200) {
          removeLocalUser();
          window.location.reload();
        } else {
          console.log("There was an error logging out...");
        } 
      })
  }

  return <div id="navbar">
    <div className="left">
      <span>{username}</span>
    </div>
    <div className="middle">
      {getUser().userType === "admin" ? <a href="/users" className={window.location.pathname === '/users' ? "active" : ""}>Accounts</a> : <></>}
      <a href="/inventory" className={window.location.pathname === '/inventory' ? "active" : ""}>Inventory</a>
      {getUser().userType === "user" ? <a href="/edit" className={window.location.pathname === '/edit' ? "active" : ""}>Edit</a> : <></>}
    </div>
    <div className='right'>
      <button className="logout-button" onClick={() => onLogout()}>Log out</button>
    </div>
  </div>
}

export default Navbar;