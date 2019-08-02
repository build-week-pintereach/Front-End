import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, Switch, NavLink } from 'react-router-dom';

import './App.css';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import PrivateBoard from './components/PrivateBoard';
import PrivateAddArticle from './components/PrivateAddArticle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    this.setState({
      token: token
    });
  }

  render() {
    //const token = localStorage.getItem('token');
    console.log('token', this.state.token);
    return (
      <div className="App">
        <Header />
        {this.state.token ? (
          <div>
            <NavLink to="/protected" component={PrivateBoard}>
              Create Board
            </NavLink>
            <NavLink to="/addArticle" component={PrivateAddArticle}>
              Add Article
            </NavLink>
          </div>
        ) : (
          <Nav />
        )}

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/protected" component={PrivateBoard} />
          <Route path="/addArticle" component={PrivateAddArticle} />
        </Switch>
      </div>
    );
  }
}

export default App;
