import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout, openModal }) => {


  const sessionLinks = () => (
    <nav>
      <a className="nav-login" onClick={() => openModal('login')}>Log in</a>
      <a className="nav-signup" onClick={() => openModal('signup')}>Sign up</a>
    </nav>
  );


  const personalGreeting = () => (
    <hgroup className="header-group">
      <img src={currentUser.image_url}/>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
};


export default Greeting;
