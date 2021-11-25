import React, { useState } from 'react';

import { Modal, Input } from 'antd';

const AddAccount = ({ username, errorMessage, visible, onOk, onCancel }) => {
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const clearFields = () => {
    setPreviousPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  const handleOk = () => {
    onOk(previousPassword, newPassword, confirmPassword);
    clearFields();
  }

  const handleClose = () => {
    onCancel();
    clearFields();
  }

  return (
    <Modal 
      title={`Edit ${username}'s Password`} 
      visible={visible} 
      onOk={handleOk} 
      okText="Confirm" 
      onCancel={handleClose}
    >
      <label><strong>Previous Password</strong></label>
      <Input 
        value={previousPassword} 
        onChange={(e) => setPreviousPassword(e.target.value)} 
        placeholder="Enter previous password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <br /><br />
      <label><strong>New Password</strong></label>
      <Input 
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
        placeholder="Enter current password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <label><strong>Confirm Password</strong></label>
      <Input 
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Confirm your password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <p style={{color: "#f00"}}>{errorMessage}</p>
    </Modal>
  )
};

export default AddAccount;