import React, { Component } from 'react';

import { AddAccount } from '../components';
import { UserService } from '../services';

import editIcon from '../assets/images/Edit Icon.svg';
import trashIcon from '../assets/images/Trash Icon.svg';

import '../assets/styles/pages/Users.css';
import { Modal } from 'antd';

export default class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      searchValue: '',
      count: 0,
      modalFlag: false,
      addAccountError: '',
    }
  }

  componentDidMount() {
    UserService.getAllUsers()
      .then((res) => {
        const { result: users } = res.data;
        
        this.setState({ users: users.map(user => user.username), count: users.length });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleSearch(value) {
    this.setState({ searchValue: value });
  }

  onEdit() {
    console.log("Edit");
  }

  onDelete(username) {
    const { users } = this.state;

    UserService.deleteUser(username)
      .then((res) => {
        const index = users.indexOf(username);
        const newUsers = [...users.slice(0, index), ...users.slice(index + 1)];
        this.setState({ users: newUsers, count: newUsers.length });
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  }

  addAccount(username) {
    if(username === '' || username === null) {
      this.setState({ addAccountError: "Username is empty" })
      return;
    }

    UserService.postRegister(username)
      .then((res) => {
        const { password } = res.data;

        this.setState({ 
          users: [...this.state.users, username], 
          count: this.state.count + 1,
          modalFlag: false,
          addAccountError: "",
        })

        Modal.info({
          title: "Password",
          content: (
            <div>Password: {password}</div>
          ),
        });
      })
      .catch((err) => {
        const { error } = err.response.data;
        if(error.code === 11000) {
          this.setState({ addAccountError: "Username already exists" })
        }
      });
  }

  render() {
    const { users, searchValue, count, modalFlag, addAccountError } = this.state;

    return <div id="users-page">
    <div className="header">
      <div>
        <input className="search-input" placeholder="Search" onChange={(e) => this.handleSearch(e.target.value)} value={searchValue} />
        <button className="add-account-button" onClick={() => this.setState({ modalFlag: true })}>Add Account</button>
      </div>
      <div className="user-stats">Accounts: <span className="count">{count}</span></div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          users.filter((user) => user.includes(searchValue)).map((user) => (
              <tr>
                <td>{user}</td>
                <td>
                  <button className="edit-button" onClick={() => this.onEdit()}>
                    <img src={editIcon} alt="Edit" />
                  </button>
                  <button className="delete-button" onClick={() => this.onDelete(user)}>
                    <img src={trashIcon} alt="Delete" />
                  </button>
                </td>
              </tr>
            )
          )
        }
      </tbody>
    </table>
    <AddAccount 
      visible={modalFlag} 
      onOk={(username) => this.addAccount(username)} 
      onCancel={() => this.setState({ modalFlag: false })} 
      errorMessage={addAccountError}
    />
  </div>
  }
};