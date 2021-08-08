import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from 'pages/login';
import PrivateRoute from './PrivateRoute';
import { PAGES } from './pages';

const LoadingPlaceholder: React.FC = () => <div />;

const index: React.FC = () => {
  const token = window.localStorage.getItem('token');

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (token ? <Redirect to="/home" /> : <Login />)}
          />
          {PAGES.map((route) => (
            <PrivateRoute
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default index;
