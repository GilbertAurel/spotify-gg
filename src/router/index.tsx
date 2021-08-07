import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from 'pages/home';
import Login from 'pages/login';
import PrivateRoute from './PrivateRoute';

const index: React.FC = () => {
  const token = window.localStorage.getItem('token');

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (token ? <Redirect to="/home" /> : <Login />)}
        />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default index;
