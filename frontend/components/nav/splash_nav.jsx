import React from 'react';
import { Link } from 'react-router-dom';

import SplashGreetingContainer from '../greeting/splash_greeting_container';
import Modal from '../session_form/login_signup_modal.jsx';


export const SplashNavBar = () => {

  return(
    <div className="splash-nav-bar">
      <Modal />
      <Link to="/" className="favicon" rel="icon"
        type="image/png" href="favicon-32x32.png" sizes="32x32" />

      <SplashGreetingContainer />
    </div>
  );
};
