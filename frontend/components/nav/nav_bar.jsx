import React from 'react';
import { Link } from 'react-router-dom';

import GreetingContainer from '../greeting/greeting_container';
import Modal from '../session_form/login_signup_modal.jsx';


export const NavBar = () => {

  return(
    <div className="header-box">
      <header  className="header-group">
        <Modal />
        <Link to="/" className="favicon" rel="icon"
          type="image/png" href="favicon-32x32.png" sizes="32x32" />

        <GreetingContainer />
      </header>
    </div>
  );
};
