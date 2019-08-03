import React, { Component } from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import PrivateBoard from './components/PrivateBoard';
import PrivateAddArticle from './components/PrivateAddArticle';
import styled from 'styled-components';

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
          <NavLinkSection>
            <NavLinks>
              <NavLink to="/protected" component={PrivateBoard}>
                <CreateBoard type="button">Create Board</CreateBoard>
              </NavLink>
              <NavLink to="/addArticle" component={PrivateAddArticle}>
                <Article type="button">Add Article</Article>
              </NavLink>
            </NavLinks>
          </NavLinkSection>
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

const NavLinkSection = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 4.5em;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 45%;
`;

const CreateBoard = styled(NavLink)`
  background-color: #fcd3ff;
  padding: 15px;
  border-radius: 5px;
  font-family: cursive;
  text-decoration: none;
  font-size: 2.5em;
  margin-right: 1.5rem;
  color: #d11aff;
  &:hover {
    background-color: #d11aff;
    color: #fcd3ff;
  }
  &.active {
    color: #8d17a5;
  }
`;

const Article = styled(NavLink)`
  background-color: #fcd3ff;
  padding: 15px;
  border-radius: 5px;
  font-family: cursive;
  text-decoration: none;
  font-size: 2.5em;
  margin-right: 1.5rem;
  color: #d11aff;
  &:hover {
    background-color: #d11aff;
    color: #fcd3ff;
  }
  &.active {
    color: #8d17a5;
  }
`;
