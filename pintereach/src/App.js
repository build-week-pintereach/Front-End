import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, Switch } from 'react-router-dom';
// import axios from 'axios';
import './App.css';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import PrivateRoute from './components/PrivateRoute';

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
