import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer, Navbar } from './components';
import { Login } from './pages';

import UserService from './services/UserService';

import './assets/styles/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    UserService.getAllUsers()
      .then((res) => {
        const { success, result } = res.data;
        console.log(success);
        console.log(result);
      });
  }

  render() {

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route path="/login" component={() => <></>} />
            <Route path="/" component={Navbar} />
          </Switch>
          <Switch>
            <Route path="/login" component={Login } />
            <Route path="/" component={() => <></>} />
          </Switch>
          <Switch>
            <Route path="/login" component={() => <></>} />
            <Route path="/" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
