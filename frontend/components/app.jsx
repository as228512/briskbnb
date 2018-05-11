import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Modal from './session_form/login_signup_modal.jsx';

const App = () => (
  <div>
    <Modal />
    <header>
      
        <h1 className="splash">Brisk bnb, the world is waiting..</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
