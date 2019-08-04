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
            <CreateBoardNav type="button">
                <CreateBoardLink to="/protected" component={PrivateBoard}>
                  Create Board
                </CreateBoardLink>
              </CreateBoardNav>
              <ArticleNav type="button">
                <ArticleNavLink to="/addArticle" component={PrivateAddArticle}>
                  Add Article
                </ArticleNavLink>
              </ArticleNav>
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

const CreateBoardNav = styled.button`
  background-color: #fcd3ff;
  color: #d11aff;
  border-radius: 5px;
  margin-right: 1.5rem;
  padding: 15px;
  &:hover {
    background-color: #d11aff;
    color: #fcd3ff;
  }
  &.active {
    color: #8d17a5;
  }
  
`;

const CreateBoardLink = styled(NavLink)`
  font-family: 'Sail', cursive;
  font-size: 2.5em;
  text-decoration: none;
 
`;

const ArticleNav = styled.button`
  background-color: #fcd3ff;
  border-radius: 5px;
  color: #d11aff;
  margin-right: 1.5rem;
  padding: 15px;
  text-decoration: none;
  &:hover {
    background-color: #d11aff;
    color: #fcd3ff;
  }
  &.active {
    color: #8d17a5;
  }
`;

const ArticleNavLink = styled(NavLink)`
font-family: 'Sail', cursive;
font-size: 2.5em;
text-decoration: none;
`;
