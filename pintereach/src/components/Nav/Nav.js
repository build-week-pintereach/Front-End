import React from 'react';
import './Nav.css';
import styled from 'styled-components';
import { Route, NavLink } from 'react-router-dom';

import Login from '../LoginRegister/Login';
import Register from '../LoginRegister/Register';
// import Entry from '../Entry/Entry';

export default function(props) {
  // const { user } = props;

  return (
    <div>
      <LoginRegister>
        <Nav>
          <LoginLink to="/login" className="font med color m-right">
            Login
          </LoginLink>
          <NavLink to="/register" className="font med color m-left">
            Register
          </NavLink>
        </Nav>
      </LoginRegister>
      <Route path="/login" exact render={props => <Login {...props} />} />
      <Route
        path="/register"
        exact
        render={props => <Register {...props} /*user={user}*/ />}
      />
    </div>
  );
}

const LoginRegister = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4.5em;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 45%;
`;

const LoginLink = styled(NavLink)`
  font-family: 'Sail', cursive;
  text-decoration: none;
  font-size: 2.5em;
  margin-right: 1.5rem;
`;
