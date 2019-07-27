import React, { Component } from 'react';
import './Header.css';
import { Route, NavLink } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';

export default class Header extends Component {
  render() {
    const { user } = this.props;
    return (
      <header className="header">
        <h1 className="header-logo">Pintereach</h1>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
        {/* create Route for '/' HOME into PrivatePath for user after logged in to use only. */}
        <Route
          path="/"
          exact
          render={props => <Home {...props} user={user} />}
        />
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
      </header>
    );
  }
}
