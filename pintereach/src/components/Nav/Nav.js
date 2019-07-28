import React from 'react';
import './Nav.css';
import { Route, NavLink } from 'react-router-dom';

import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
// import Entry from '../Entry/Entry';

export default function(props) {
  // const { user } = props;

  return (
    <section>
      <nav className="nav">
        <NavLink to="/login" className="font med right">
          Login
        </NavLink>
        <NavLink to="/register" className="font med left">
          Register
        </NavLink>
      </nav>

      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} /*user={user}*/ />}
      />
    </section>
  );
}
