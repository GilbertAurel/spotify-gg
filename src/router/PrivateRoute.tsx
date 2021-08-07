import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

type Props = {
  component: React.FC;
} & RouteProps;

const PrivateRoute = ({ component, ...routerProps }: Props) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    return <Route component={component} {...routerProps} />;
  }

  return <Redirect to="/" />;
};

export default PrivateRoute;
