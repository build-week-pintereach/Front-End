import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
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
  };

  render() {
    const { username, password } = this.state;
    return (
      <section>
        <h2>User Login</h2>
        <form onSubmit={this.submitUser}>
          <div className="username-field">
            <label htmlFor="username-login-field">User name: </label>
            <input
              type="text"
              id="username-login-field"
              className="username-input"
              name="username"
              placeholder="Username"
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div className="password-field">
            <label htmlFor="password-login-field">Password: </label>
            <input
              type="password"
              id="password-login-field"
              className="password-input"
              name="password"
              placeholder="Username"
              value={password}
              onChange={this.changeHandler}
            />
            <br />
            <button type="submit" className="btn login-button">
              Login
            </button>
          </div>
        </form>
      </section>
    );
  }
}
