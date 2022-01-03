import React, { useState } from 'react';

import '../assets/styles/pages/UserEditPassword.css';
import { UserService } from '../services';
import { getUser } from '../utils/store';

const UserEditPassword = () => {
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onConfirm = () => {
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

    UserService.patchUser(getUser().username, previousPassword, newPassword)
      .then(() => {
        alert('Successfully edited the password')
      }) 
      .catch((err) => {
        const { data } = err.response;

        setErrorMessage(data)
      })

    setPreviousPassword('')
    setNewPassword('')
    setConfirmNewPassword('')
  }

  return (
    <div id='user-edit-password'>
      <h1>Edit Password</h1>
      <input 
        placeholder='Previous Password' 
        value={previousPassword} 
        onChange={(e) => setPreviousPassword(e.target.value)}
      />
      <br />
      <input 
        placeholder='New Password' 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <input 
        placeholder='Confirm New Password' 
        value={confirmNewPassword} 
        onChange={(e) => setConfirmNewPassword(e.target.value)}
      />
      <div className='error-message'>{errorMessage}</div>
      <button className='confirm-button' onClick={() => onConfirm()}>Confirm</button>
    </div>
  )
}

export default UserEditPassword;