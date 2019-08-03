import React, { Component } from 'react';
import styled from 'styled-components';
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeaderLogo className="header-logo">Pintereach</HeaderLogo>
      </header>
    );
  }
}

const HeaderLogo = styled.h1`
  color: #d11aff;
  font-family: 'Sail', cursive;
  font-size: 3.75em;
`;
