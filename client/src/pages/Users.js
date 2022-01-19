import React, { Component } from 'react';
import { Modal } from 'antd';

import { AddAccount, AdminEditAccount } from '../components';
import { UserService } from '../services';
import { getUser, setUserLocal } from '../utils/store';

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
      editAccountVisible: false,
      addAccountError: '',
      editAccountError: '',
      toBeEdited: null,
    }
  }

  componentDidMount() {
    UserService.getAllUsers()
      .then((res) => {
        const { result: users } = res.data;

        this.setState({ users , count: users.length });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onEdit(username, userType, editPasswordFlag, previousPassword, newPassword, confirmNewPassword) {
    const { toBeEdited, users } = this.state;

    if(toBeEdited != null) {
      if(username === '' || username === null) {
        this.setState({ editAccountError: "Username cannot be empty" });
        return;
      } else if(username.length < 6) {
        this.setState({ editAccountError: "Username has to be atleast 6 characters" })
        return;
      } else if(username.length > 30) {
        this.setState({ editAccountError: "Username has to be atmost 30 characters" })
        return;
      } else if(username.includes(' ')) {
        this.setState({ editAccountError: "Username cannot contain a space" })
        return;
      } 
      
      if(!editPasswordFlag && username === toBeEdited.username && userType === toBeEdited.userType) {
        this.setState({ editAccountError: "Cannot proceed. No changes has been done" })
        return;
      }

      if(userType !== 'user' && userType !== 'admin') {
        this.setState({ editAccountError: "Role can only be either `user` or `admin`" })
        return;
      }

      if(editPasswordFlag) {
        if(previousPassword === '' || previousPassword === null) {
          this.setState({ editAccountError: "Previous password cannot be empty" });
          return;
        }
  
        if(newPassword === '' || newPassword === null) {
          this.setState({ editAccountError: "New password cannot be empty" });
          return;
        }
  
        if(confirmNewPassword === '' || confirmNewPassword === null) {
          this.setState({ editAccountError: "Confirm password cannot be empty" });
          return;
        }
  
        if(previousPassword.length < 6 || newPassword.length < 6 || confirmNewPassword.length < 6) {
          this.setState({ editAccountError: "Password has to be atleast 6 characters" });
          return 
        }
    
        if(previousPassword.length > 30 || newPassword.length > 30 || confirmNewPassword.length > 30) {
          this.setState({ editAccountError: "Password has to be atmost 30 characters" });
          return 
        }
  
        if(newPassword !== confirmNewPassword) {
          this.setState({ editAccountError: "New password and confirm password doesn't match" });
          return;
        }
      } else {
        previousPassword = null;
        newPassword = null;
      }

      UserService.patchUser(toBeEdited._id, username, userType, previousPassword, newPassword)
        .then((res) => {
          const { result } = res.data;

          alert(`Edit was successful`)
          
          const index = users.indexOf(toBeEdited);

          if(getUser().username === toBeEdited.username) {
            setUserLocal(result)
            this.props.updateUser(username)
          }

          this.setState({ editAccountVisible: false, toBeEdited: null, users: [...users.slice(0, index), result, ...users.slice(index + 1)], editAccountError: "" });
        }) 
        .catch((err) => {
          const { data } = err.response;

          this.setState({ editAccountError: data });
        })
    }
  }

  onDelete(user) {
    const { users } = this.state;

    // asks for admin confirmation on whether or not to delete the user
    Modal.confirm({
      title: `Are you sure you want to delete ${user.username}`,
      onOk: async () => {
        UserService.deleteUser(user._id)
        .then(() => {
          const index = users.indexOf(user);
          const updatedUsers = [...users.slice(0, index), ...users.slice(index + 1)];
          this.setState({ users: updatedUsers, count: updatedUsers.length });
          alert(`Deletion was successful`)
        })
        .catch((err) => {
          console.log(err.response.data);
        })
      }
    });
  }

  addAccount(username) {
    const { users, count } = this.state;

    if(username === '' || username === null) {
      this.setState({ addAccountError: "Username cannot be empty" })
      return;
    } else if(username.length < 6) {
      this.setState({ addAccountError: "Username has to be atleast 6 characters" })
      return;
    } else if(username.length > 30) {
      this.setState({ addAccountError: "Username has to be atmost 30 characters" })
      return;
    } else if(username.includes(' ')) {
      this.setState({ addAccountError: "Username cannot contain a space" })
      return;
    }

    UserService.postRegister(username)
      .then((res) => {
        const { result } = res.data;

        this.setState({ 
          users: [...users, result], 
          count: count + 1,
          addAccountVisible: false,
          addAccountError: "",
        })

        Modal.info({
          title: "Password",
          content: (
            <div>Password: {result.password}</div>
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
    const { users, searchValue, count, addAccountVisible, addAccountError, editAccountVisible, editAccountError, toBeEdited } = this.state;

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
          // maps each user to the table
          users.filter((user) => user.username.toLowerCase().includes(searchValue.toLowerCase())).map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{user.userType}</td>
                <td>
                  <button 
                    className="edit-button" 
                    onClick={() => this.setState({ editAccountVisible: true, toBeEdited: user })}
                  >
                    <img src={editIcon} alt="Edit" />
                  </button>
                  <button 
                    className="delete-button" 
                    onClick={() => this.onDelete(user)} 
                    disabled={user.username === getUser().username}
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
      onCancel={() => this.setState({ addAccountVisible: false, addAccountError: "" })} 
      errorMessage={addAccountError}
    />
    <AdminEditAccount 
      user={toBeEdited}
      visible={editAccountVisible}
      onOk={(username, role, editPasswordFlag, previousPassword, newPassword, confirmNewPassword) => this.onEdit(username, role, editPasswordFlag, previousPassword, newPassword, confirmNewPassword)}
      onCancel={() => this.setState({ editAccountVisible: false, editAccountError: "" })}
      errorMessage={editAccountError}
    />
  </div>
  }
};