import React, { useState } from 'react';
import { Checkbox, Modal } from 'antd';

import { UserService } from '../services';
import { getUser, setUserLocal } from '../utils/store';

import '../assets/styles/pages/UserEditAccount.css';

const UserEditAccount = ({ updateUser }) => {
  const user = getUser();

  const [username, setUsername] = useState(user.username);
  const [previousPassword, setPreviousPassword] = useState('');
  const [editPasswordFlag, setEditPasswordFlag] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onConfirm = (e) => {
    e.preventDefault()
    setPreviousPassword('')
    setNewPassword('')
    setConfirmNewPassword('')

    if(username === '' || username === null) {
      setErrorMessage("Username cannot be empty")
       (user.username)
      return;
    } else if(username.length < 6) {
      setErrorMessage("Username has to be atleast 6 characters")
      setUsername(user.username)
      return;
    } else if(username.length > 30) {
      setErrorMessage("Username has to be atmost 30 characters")
      setUsername(user.username)
      return;
    } else if(username.includes(' ')) {
      setErrorMessage("Username cannot contain a space")
      setUsername(user.username)
      return;
    } 

    if(editPasswordFlag) {
      if(previousPassword === '' || previousPassword === null) {
        setErrorMessage('Previous password cannot be empty')
        return 
      }
  
      if(newPassword === '' || newPassword === null) {
        setErrorMessage('Previous password cannot be empty')
        return 
      }
  
      if(confirmNewPassword === '' || confirmNewPassword === null) {
        setErrorMessage('Previous password cannot be empty')
        return 
      }
  
      if(previousPassword.length < 6 || newPassword.length < 6 || confirmNewPassword.length < 6) {
        setErrorMessage('Password has to be atleast 6 characters')
        return 
      }
  
      if(previousPassword.length > 30 || newPassword.length > 30 || confirmNewPassword.length > 30) {
        setErrorMessage('Password has to be atmost 30 characters')
        return 
      }
  
      if(previousPassword === newPassword && previousPassword === confirmNewPassword) {
        setErrorMessage('Previous password and the new password is the same')
        return 
      }
  
      if(newPassword !== confirmNewPassword) {
        setErrorMessage('New password and confirm new password must be the same.')
        return 
      }
    } else {
      if(username === user.username) {
        setErrorMessage("Username cannot be the same")
        return;
      }
    }

    UserService.patchUser(user._id, username, 'user', editPasswordFlag ? previousPassword : null, editPasswordFlag ? newPassword : null)
      .then((res) => {
        const { result } = res.data;

        setUserLocal(result)
        setErrorMessage('');
        updateUser(result.username)
        Modal.success({
          content: 'Successfully edited the account',
        });
      }) 
      .catch((err) => {
        const { data } = err.response;

        setErrorMessage(data)
      })
  }

  return (
    <div id='user-edit-account'>
      <h1>Edit Account</h1>
      <input 
        placeholder='Username' 
        value={username} 
        onChange={(e) => setUsername(e.target.value.trim())}
        onKeyPress={(e) => e.key === 'Enter' && onConfirm(e)}
      />
      <br /><br />
      <Checkbox checked={editPasswordFlag} onChange={(e) => setEditPasswordFlag(e.target.checked)}>Edit Password</Checkbox>
      <br />
      <input 
        type='password'
        placeholder='Previous Password' 
        value={previousPassword} 
        onChange={(e) => setPreviousPassword(e.target.value.trim())}
        disabled={!editPasswordFlag}
        onKeyPress={(e) => e.key === 'Enter' && onConfirm(e)}
      />
      <br />
      <input 
        type='password'
        placeholder='New Password' 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value.trim())}
        disabled={!editPasswordFlag}
        onKeyPress={(e) => e.key === 'Enter' && onConfirm(e)}
      />
      <input 
        type='password'
        placeholder='Confirm New Password' 
        value={confirmNewPassword} 
        onChange={(e) => setConfirmNewPassword(e.target.value.trim())}
        disabled={!editPasswordFlag}
        onKeyPress={(e) => e.key === 'Enter' && onConfirm(e)}
      />
      <div className='error-message'>{errorMessage}</div>
      <button className='confirm-button' onClick={(e) => onConfirm(e)}>Confirm</button>
    </div>
  )
}

export default UserEditAccount;