import React, { Component } from 'react';

import { AddAccount, AdminEditPassword } from '../components';
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
      addAccountVisible: false,
      editPasswordVisible: false,
      addAccountError: '',
      editPasswordError: '',
      toBeEdited: null,
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

  onEdit(previousPassword, newPassword, confirmPassword) {
    const { toBeEdited } = this.state;

    if(toBeEdited != null) {
      if(previousPassword === '' || previousPassword === null) {
        this.setState({ editPasswordError: "Previous password is empty" });
        return;
      }

      if(newPassword === '' || newPassword === null) {
        this.setState({ editPasswordError: "New password is empty" });
        return;
      }

      if(confirmPassword === '' || confirmPassword === null) {
        this.setState({ editPasswordError: "Confirm password is empty" });
        return;
      }

      if(newPassword !== confirmPassword) {
        this.setState({ editPasswordError: "New password and confirm password doesn't match" });
        return;
      }

      UserService.patchUser(toBeEdited, previousPassword, newPassword)
        .then((res) => {
          console.log(res.data);
          this.setState({ editPasswordVisible: false, toBeEdited: null });
        }) 
        .catch((err) => {
          const { data } = err.response;

          this.setState({ editPasswordError: data });
        })
    }
  }

  onDelete(username) {
    const { users } = this.state;

    // asks for admin confirmation on whether or not to delete the user
    Modal.confirm({
      title: `Are you sure you want to delete ${username}`,
      onOk: async () => {
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
    });
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
          addAccountVisible: false,
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
    const { users, searchValue, count, addAccountVisible, addAccountError, editPasswordVisible, editPasswordError, toBeEdited } = this.state;

    return <div id="users-page">
    <div className="header">
      <div>
        <input 
          className="search-input" 
          placeholder="Search" 
          onChange={(e) => this.setState({ searchValue: e.target.value })} 
          value={searchValue} 
        />
        <button 
          className="add-account-button" 
          onClick={() => this.setState({ addAccountVisible: true })}
        >
          Add Account
        </button>
      </div>
      <div className="user-stats">
        Accounts: <span className="count">{count}</span>
      </div>
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
          // maps per user to the table
          users.filter((user) => user.includes(searchValue)).map((user) => (
              <tr>
                <td>{user}</td>
                <td>
                  <button 
                    className="edit-button" 
                    onClick={() => this.setState({ editPasswordVisible: true, toBeEdited: user })}
                  >
                    <img src={editIcon} alt="Edit" />
                  </button>
                  <button 
                    className="delete-button" 
                    onClick={() => this.onDelete(user)} 
                    disabled={user === "admin"}
                  >
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
      visible={addAccountVisible} 
      onOk={(username) => this.addAccount(username)} 
      onCancel={() => this.setState({ addAccountVisible: false })} 
      errorMessage={addAccountError}
    />
    <AdminEditPassword 
      username={toBeEdited}
      visible={editPasswordVisible}
      onOk={(previousPassword, newPassword, confirmPassword) => this.onEdit(previousPassword, newPassword, confirmPassword)}
      onCancel={() => this.setState({ editPasswordVisible: false })}
      errorMessage={editPasswordError}
    />
  </div>
  }
};