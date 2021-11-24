import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser, getUserToken } from './store';
import { LOGIN_FALLBACK, USER_FALLBACK } from './constants';

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      // checks if user is logged in
      if (getUserToken()) {
        // checks if user is a user, if he is, he'll be redirected to user page
        if (getUser().userType === 'user') {
          return (
            <Redirect
              to={{
                pathname: USER_FALLBACK,
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }

        // if not, then the user will see the admin page
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

export default AdminRoute;