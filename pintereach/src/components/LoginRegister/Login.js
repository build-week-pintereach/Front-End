import React, { Component } from 'react';
import axios from 'axios';
import './LoginRegister.css';

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
    const token = localStorage.getItem('token');
    axios
      .post('https://build-week-pintereach.herokuapp.com/api/auth/login', {
        username,
        password,
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.token);
        this.props.history.push('/protected');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
    return (
      <section className="m-top user-login">
        <h2 className="heading">User Login</h2>

        <form onSubmit={this.loginUser}>
          <div className="username-field">
            <label htmlFor="username-login-field" className="label">
              User name:{' '}
            </label>
            <input
              type="text"
              id="username-login-field"
              className="input"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="password-field">
            <label htmlFor="password-login-field" className="label">
              Password:{' '}
            </label>
            <input
              type="password"
              id="password-login-field"
              className="input"
              name="password"
              placeholder="Username"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <button type="submit" className="btn login-button">
            Login
          </button>
        </form>
      </section>
    );
  }
}
