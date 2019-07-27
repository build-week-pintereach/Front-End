import React, { Component } from 'react';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';

import './App.css';

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
    const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Entry />
      </div>
    );
  }
}

export default App;
