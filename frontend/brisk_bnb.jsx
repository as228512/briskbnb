import React from 'react';
import ReactDOM from 'react-dom';



// TEST START
import {login, logout, signup} from './util/session_api_util.js';
window.login = login;
window.logout = logout;
window.signup = signup;
// TEST END



document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BriskBnB</h1>, root);
});
