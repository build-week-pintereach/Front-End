import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-logo">Pintereach</h1>
        <div className="nav">
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      </header>
    );
  }
}
