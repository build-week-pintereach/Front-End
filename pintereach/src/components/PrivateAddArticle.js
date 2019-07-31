import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AddArticle from './AddArticle';

export default function(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props => {
        const token = localStorage.getItem('token');
        return token ? <AddArticle {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
}
