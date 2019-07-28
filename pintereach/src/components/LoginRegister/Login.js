import React, { Component } from 'react';
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
  };

  UserLogin = props => {
    props.loginUser();
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
              className="username-input"
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
              className="password-input"
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
