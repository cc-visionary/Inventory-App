import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { Login, Admin, Users, Inventory } from './pages';
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
            <Route path="/" exact component={() => <></>} />
            <Route path="/" component={Navbar} />
          </Switch>
          <Switch>
            <PublicRoute path="/" exact component={Login} />
            <AdminRoute path="/admin" component={Admin} />
            <AdminRoute path="/users" component={Users} />
            <UserRoute path="/inventory" component={Inventory} />
          </Switch>
          <Switch>
            <Route path="/" exact component={() => <></>} />
            <Route path="/" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
