import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from './store';
import { ADMIN_FALLBACK, USER_FALLBACK } from './constants';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // if user is not logged in, stay in the login page
      if (!getUser()) return <Component {...props} />;
      // check if user is an admin, if yes, then user will be redirected to admin page
      if (getUser().userType === 'admin') return <Redirect to={{ pathname: ADMIN_FALLBACK }} />;
      // if user is user, then user will be redirected to the user page
      return <Redirect to={{ pathname: USER_FALLBACK }} />;
    }}
  />
);

export default PublicRoute;