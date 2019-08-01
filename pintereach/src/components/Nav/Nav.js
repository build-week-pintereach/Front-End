import React from 'react';
// import './Nav.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function(props) {
  return (
    <div>
      <LoginRegister>
        <Nav>
          <LoginLink to="/login">Login</LoginLink>
          <RegisterLink to="/register">Register</RegisterLink>
        </Nav>
      </LoginRegister>
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
  color: #d11aff;
  &:hover {
    color: #8d17a5;
  }
  &.active {
    color: #8d17a5;
  }
`;

const RegisterLink = styled(NavLink)`
  font-family: 'Sail', cursive;
  text-decoration: none;
  font-size: 2.5em;
  margin-left: 1.5rem;
  color: #d11aff;
  &:hover {
    color: #8d17a5;
  }
  &.active {
    color: #8d17a5;
  }
`;
