import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from 'pages/login';
import FullLoading from 'components/full-loading';
import PrivateRoute from './PrivateRoute';
import { ROUTES } from './routes';

const index: React.FC = () => {
  const token = window.localStorage.getItem('token');

  return (
    <Suspense fallback={<FullLoading message="" />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (token ? <Redirect to="/home" /> : <Login />)}
          />
          {ROUTES.map((route) => (
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
