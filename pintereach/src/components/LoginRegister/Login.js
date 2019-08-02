import React, { Component } from 'react';
import axios from 'axios';
// import './LoginRegister.css';
import styled from 'styled-components';
export default class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  changeHandler = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  loginUser = e => {
    e.preventDefault();
    const { username, password } = this.state;

    axios
      .post('https://build-week-pintereach.herokuapp.com/api/auth/login', {
        username,
        password
      })
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.props.history.push('/protected');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <UserLogin>
        <UserHeading>User Login</UserHeading>

        <form onSubmit={this.loginUser}>
          <div>
            <UsernameLabel htmlFor="username-login-field">
              User name:{' '}
              <UsernameInput
                type="text"
                id="username-login-field"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.changeHandler}
              />
            </UsernameLabel>
          </div>
          <br />
          <div className="password-field">
            <PasswordLabel htmlFor="password-login-field" className="label">
              Password:{' '}
              <PasswordInput
                type="password"
                id="password-login-field"
                name="password"
                placeholder="Username"
                value={password}
                onChange={this.changeHandler}
              />
            </PasswordLabel>
          </div>
          <br />
          <LoginButton type="submit">Login</LoginButton>
        </form>
      </UserLogin>
    );
  }
}

const UserLogin = styled.section`
  margin-top: 2.75rem;
`;

const UserHeading = styled.h2`
  font-size: 1.75rem;
  font-family: sans-serif;
  padding-bottom: 0.75rem;
  color: #d11aff;
`;

const UsernameLabel = styled.label`
  margin-right: 15px;
  color: #d11aff;
`;

const UsernameInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border-color: #fcd3ff;
`;

const PasswordLabel = styled.label`
  margin-right: 10px;
  color: #d11aff;
`;

const PasswordInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border-color: #fcd3ff;
`;

const LoginButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  background-color: #fcd3ff;
  color: #8d17a5;
  font-size: 1.25rem;

  &:hover {
    background-color: #8d17a5;
    color: #fcd3ff;
  }
`;
