import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Login, Users, Inventory, UserEditPassword } from './pages';
import { AdminRoute, UserRoute, PublicRoute } from './utils';

import './assets/styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <AdminRoute path="/users" component={Navbar} />
            <UserRoute path="/inventory" component={Navbar} />
            <UserRoute path="/edit" component={Navbar} />s
            <Route path="/" component={() => <></>} />
          </Switch>
          <Switch>
            <AdminRoute path="/users" component={Users} />
            <UserRoute path="/inventory" component={Inventory} />
            <UserRoute path="/edit" component={UserEditPassword} />
            <PublicRoute path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
