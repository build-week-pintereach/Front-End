import React, { Component } from 'react';
import Header from './components/Header/Header';
// import CreateBoards from './components/CreateBoards/CreateBoards';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login/Login';
import { Route } from 'react-router-dom';

import './App.css';

// import Register from './components/Register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
        token: ''
      },
      articles: [],
      filteredArticles: []
    };
  }

  registerUser = user => {};

  loginUser = user => {};

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
