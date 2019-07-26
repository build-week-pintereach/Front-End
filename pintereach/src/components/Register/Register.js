import React, { Component } from 'react';
import './Register.css';

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

  render() {
    const { username, password } = this.state;
    return (
      <div className="register-user">
        <h2>Register User</h2>
        <form className="register-user-form">
          <div className="username-section">
            <label htmlFor="username-field">User name: </label>

            <input
              type="text"
              id="username-field"
              className="username-input"
              name="username"
              value={username}
              onChange={this.changeHandler}
              placeholder="Enter a user name..."
              required
            />
          </div>

          <br />

          <div className="password">
            <label htmlFor="password-field">Password: </label>
            <input
              type="password"
              name="password"
              id="password-field"
              className="password-input"
              value={password}
              onChange={this.changeHandler}
              placeholder="Please enter a password..."
              required
            />
          </div>
          <br />
          <button type="submit" className="btn register-button">
            Register User
          </button>
        </form>
      </div>
    );
  }
}
export default Register;
