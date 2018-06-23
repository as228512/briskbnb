import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import GreetingContainer from './greeting/greeting_container';
import SearchContainer from './search/search_container';
import HomeShowContainer from './home_show/home_show_container';
import GreetingText from './greeting/greeting_text';
import Modal from './session_form/login_signup_modal.jsx';

const App = () => (
  <div>
    
    <Switch>
      <Route exact path="/" component={ GreetingText } />
      <Route exact path="/homes" component={ SearchContainer } />
      <Route exact path="/homes/:homeId" component={ HomeShowContainer } />
    </Switch>
  </div>
);

export default App;
