import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  changeHandler = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitUser = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const payload = { username, password };
    axios
      .post(
        'https://build-week-pintereach.herokuapp.com/api/auth/register',
        payload
      )
      .then(response => {
        console.log(response);
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;

    return (
      <RegisterUser>
        <RegisterHeading>Register User</RegisterHeading>
        <form onSubmit={this.submitUser} className="register-user-form">
          <div>
            <UsernameLabel htmlFor="username-field">
              User name:{' '}
              <UsernameInput
                type="text"
                id="username-field"
                name="username"
                value={username}
                onChange={this.changeHandler}
                placeholder="Enter a user name..."
                required
              />
            </UsernameLabel>
          </div>

          <br />

          <div>
            <PasswordLabel htmlFor="password-field">
              Password:{' '}
              <PasswordInput
                type="password"
                name="password"
                id="password-field"
                value={password}
                onChange={this.changeHandler}
                placeholder="Please enter a password..."
                required
              />
            </PasswordLabel>
          </div>
          <br />
          <RegisterButton type="submit">Register User</RegisterButton>
        </form>
      </RegisterUser>
    );
  }
}
export default Register;

const RegisterUser = styled.section`
  margin-top: 2.75rem;
`;

const RegisterHeading = styled.h2`
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

const RegisterButton = styled.button`
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
