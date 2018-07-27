import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, sessionId, exact, computedMatch }) => {

  const requestedTripsId = parseInt(computedMatch.params.userId);
  const authorized = sessionId === requestedTripsId;

  return (
    <Route path={path} exact={exact} render={(props) => {
      return (
        loggedIn && authorized ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )
    }} />
  )

};

const Protected = ({ component: Component, path, loggedIn, exact }) => {

  return (
    <Route path={path} exact={exact} render={(props) => {
      return (
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      )
    }} />
  )

};

const mapStateToProps = state => {
  const sessionId = state.session.id;
  return (
    {
      loggedIn: Boolean(sessionId),
      sessionId: sessionId
    }
  )
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
