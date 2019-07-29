import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
// import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      filteredArticles: []
    };
  }

  // registerUser = user => {
  //   axios.get('https://build-week-pintereach.herokuapp.com/api/auth/register');
  // };

  // loginUser = () => {
  //   axios
  //     .post('https://build-week-pintereach.herokuapp.com/api/auth/login', {
  //       username: 'test1',
  //       password: 'hello'
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
