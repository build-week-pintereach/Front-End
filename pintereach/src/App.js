import React, { Component } from 'react';
import Header from './components/Header/Header';
import Entry from './components/Entry/Entry';
import axios from 'axios';
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

  registerUser = user => {
    axios.get('https://build-week-pintereach.herokuapp.com/api/auth/register');
  };

  loginUser = () => {
    axios
      .post('https://build-week-pintereach.herokuapp.com/api/auth/login', {
        username: 'test1',
        password: 'hello'
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Entry />
      </div>
    );
  }
}

export default App;
