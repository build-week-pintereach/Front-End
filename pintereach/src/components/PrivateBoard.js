import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CreateBoards from './CreateBoards/CreateBoards';

export default function(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem('token');
        return token ? <CreateBoards {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}
