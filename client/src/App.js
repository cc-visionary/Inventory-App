import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Login, Users, Inventory, UserEditAccount } from './pages';
import { AdminRoute, UserRoute, PublicRoute } from './utils';
import { getUser } from './utils/store';

import './assets/styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };
  }
  
  componentDidMount() {
    this.setState({ username: getUser() ? getUser().username : '' })
  }

  render() {
    const { username } = this.state;

    return (
      <Router>
        <div className="app">
          <Switch>
            <AdminRoute path="/users" component={Navbar} />
            <UserRoute path="/inventory" component={() => <Navbar username={username}/>} />
            <UserRoute path="/edit" component={() => <Navbar username={username}/>} />
            <Route path="/" component={() => <></>} />
          </Switch>
          <Switch>
            <AdminRoute path="/users" component={Users} />
            <UserRoute path="/inventory" component={Inventory} />
            <UserRoute path="/edit" component={() => <UserEditAccount updateUser={(username) => this.setState({ username })} />} />
            <PublicRoute path="/" component={Login} />
          </Switch>
        </div>
      </Router>
    );
  }
}
