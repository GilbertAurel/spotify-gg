import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute = ({ component, ...routerProps }: RouteProps) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    return <Route component={component} {...routerProps} />;
  }

  return <Redirect to="/" />;
};

export default PrivateRoute;
