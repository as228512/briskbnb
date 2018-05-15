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
        <Route exact path="/" component={GreetingContainer} />


        <Link to="/" className="favicon" rel="icon" t
          ype="image/png" href="favicon-32x32.png" sizes="32x32" />
        <h1 className="splash">Book unique homes in cool climates</h1>
        <h1 className="splash-2">the world over.</h1>
      <GreetingContainer />
    </header>
  </div>
);

export default App;
