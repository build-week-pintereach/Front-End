import React from 'react';
// import { Route, NavLink } from 'react-router-dom';
import './Entry.css';
import Nav from '../Nav/Nav';

export default function(props) {
  return (
    <div>
      <section>
        <Nav loginUser={props.loginUser} />
      </section>
    </div>
  );
}
