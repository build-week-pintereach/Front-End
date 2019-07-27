import React from 'react';
import './Nav.css';
import { Route, NavLink } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import Entry from '../Entry/Entry';

export default function(props) {
  const { user } = props;
  return (
    <section>
      <nav className="nav">
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/" />
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
      {/* create Route for '/' HOME into PrivatePath for user after logged in to use only. */}
      {/* <Route
          path="/"
          exact
          render={props => <Home {...props} user={user} />}
        /> */}
      <Route path="/" exact component={Entry} />
      <Route
        path="/login"
        exact
        render={props => <Login {...props} user={user} />}
      />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} user={user} />}
      />
    </section>
  );
}
