import React, { Component } from 'react';
import './Home.css';
import Header from '../Header/Header';
import CreateBoards from '../CreateBoards/CreateBoards';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateBoards />
      </div>
    );
  }
}
