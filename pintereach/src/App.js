import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    const token = localStorage.getItem('token');
    return (
      <div className="App">
        <Header />
        {token ? <br /> : <Nav />}

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/protected" component={PrivateRoute} />
        </Switch>
      </div>
    );
  }
}

export default App;
