import React, { Component } from 'react';

import { AddAccount, AdminEditPassword } from '../components';
import { UserService } from '../services';
import { Modal } from 'antd';

import editIcon from '../assets/images/Edit Icon.svg';
import trashIcon from '../assets/images/Trash Icon.svg';

import '../assets/styles/pages/Users.css';

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

        this.setState({ users: users.map(user => ({username: user.username, userType: user.userType})), count: users.length });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onEdit(previousPassword, newPassword, confirmNewPassword) {
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

      if(confirmNewPassword === '' || confirmNewPassword === null) {
        this.setState({ editPasswordError: "Confirm password is empty" });
        return;
      }

      if(previousPassword.length < 6 || newPassword.length < 6 || confirmNewPassword.length < 6) {
        this.setState({ editPasswordError: "Password has to be atleast 6 characters" });
        return 
      }
  
      if(previousPassword.length > 30 || newPassword.length > 30 || confirmNewPassword.length > 30) {
        this.setState({ editPasswordError: "Password has to be atmost 30 characters" });
        return 
      }

      if(newPassword !== confirmNewPassword) {
        this.setState({ editPasswordError: "New password and confirm password doesn't match" });
        return;
      }

      UserService.patchUser(toBeEdited, previousPassword, newPassword)
        .then((res) => {
          this.setState({ editPasswordVisible: false, toBeEdited: null });
        }) 
        .catch((err) => {
          const { data } = err.response;

          this.setState({ editPasswordError: data });
        })
    }
  }

  onDelete(user) {
    const { users } = this.state;

    // asks for admin confirmation on whether or not to delete the user
    Modal.confirm({
      title: `Are you sure you want to delete ${user.username}`,
      onOk: async () => {
        UserService.deleteUser(user.username)
        .then((res) => {
          const index = users.indexOf(user);
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
    } else if(username.length < 6) {
      this.setState({ addAccountError: "Username has to be atleast 6 characters" })
      return;
    } else if(username.length > 30) {
      this.setState({ addAccountError: "Username has to be atmost 30 characters" })
      return;
    }

    UserService.postRegister(username)
      .then((res) => {
        const { password } = res.data;

        this.setState({ 
          users: [...this.state.users, {username, userType: 'user'}], 
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
          <th>Role</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {
          // maps per user to the table
          users.filter((user) => user.username.includes(searchValue)).map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.userType}</td>
                <td>
                  <button 
                    className="edit-button" 
                    onClick={() => this.setState({ editPasswordVisible: true, toBeEdited: user.username })}
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
      onOk={(previousPassword, newPassword, confirmNewPassword) => this.onEdit(previousPassword, newPassword, confirmNewPassword)}
      onCancel={() => this.setState({ editPasswordVisible: false })}
      errorMessage={editPasswordError}
    />
  </div>
  }
};