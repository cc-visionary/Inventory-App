import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser, getUserToken } from './store';
import { LOGIN_FALLBACK, ADMIN_FALLBACK } from './constants';

const UserRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // checks if user is logged in
      if (getUserToken()) {

        // if not, then the user will see the user page
        return <Component {...props} />;
      }
      // if user is logged out, redirect to login page
      return (
        <Redirect
          to={{
            pathname: LOGIN_FALLBACK,
            state: {
              from: props.location,
            },
          }}
        />
      );
    }}
  />
);

export default UserRoute;