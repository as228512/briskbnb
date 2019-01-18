import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSearch,
  faSnowflake,
  faStar,
  faBars,
  faTimes,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import {
  faStar as emptyStar,
  faLightbulb as lightbulb
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faSearch,
  faSnowflake,
  faStar,
  emptyStar,
  lightbulb,
  faBars,
  faTimes,
  faGithubSquare,
  faLinkedin,
  faInfoCircle
);

import GreetingText from "./greeting/greeting_text";
import SearchContainer from "./search/search_container";
import HomeShowContainer from "./home_show/home_show_container";
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
