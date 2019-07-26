import React, { Component } from 'react';
import Header from './components/Header/Header';
import CreateBoards from './components/CreateBoards/CreateBoards';
import './App.css';

import Register from './components/Register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: ''
      }
    };
  }

  registerUser = user => {};

  render() {
    return (
      <div className="App">
        <Header />
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;
