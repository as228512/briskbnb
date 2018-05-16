import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import HomeIndex from './homes/home_index';
import GreetingText from './greeting/greeting_text';
import Modal from './session_form/login_signup_modal.jsx';

const App = () => (
  <div>
    <Modal />
    <header>
      <Link to="/" className="favicon" rel="icon"
        type="image/png" href="favicon-32x32.png" sizes="32x32" />


      <GreetingContainer />
    </header>
    <Switch>
      <Route exact path="/" component={GreetingText} />
      <Route exact patch="/homes" component={ HomeIndex } />
    </Switch>
  </div>
);

export default App;
