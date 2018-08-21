import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faSnowflake } from "@fortawesome/free-solid-svg-icons";
library.add(faSearch, faSnowflake);

import GreetingContainer from "./greeting/greeting_container";
import SearchContainer from "./search/search_container";
import HomeShowContainer from "./home_show/home_show_container";
import GreetingText from "./greeting/greeting_text";
import Modal from "./session_form/login_signup_modal.jsx";
import TripShowContainer from "./trips/trips_container";

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={GreetingText} />
      <Route exact path="/homes" component={SearchContainer} />
      <Route exact path="/homes/:homeId" component={HomeShowContainer} />
      <AuthRoute exact path="/trips/:userId" component={TripShowContainer} />
      <Redirect from="/" to="/" />
    </Switch>
  </div>
);

export default App;
