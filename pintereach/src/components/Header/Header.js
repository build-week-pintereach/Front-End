import React, { Component } from 'react';
import './Header.css';
import { Route, NavLink } from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-logo">Pintereach</h1>
      </header>
    );
  }
}
