import React, { useEffect, useState } from 'react';

import { Modal, Input, Select, Checkbox } from 'antd';
import { getUser } from '../utils/store';

const { Option } = Select;

const AdminEditAccount = ({ user, errorMessage, visible, onOk, onCancel }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [editPasswordFlag, setEditPasswordFlag] = useState(false);
  const [previousPassword, setPreviousPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    clearFields();
  }, [user]);

  const clearFields = () => {
    if(user != null) {
      setUsername(user.username)
      setRole(user.userType);
    }
    setPreviousPassword('');
    setNewPassword('');
    setConfirmPassword('');
  }

  const handleOk = () => {
    onOk(username, role, editPasswordFlag, previousPassword, newPassword, confirmPassword);
    clearFields();
    setEditPasswordFlag(false);
  }

  const handleClose = () => {
    onCancel();
    clearFields();
    setEditPasswordFlag(false);
  }

  return (
    <Modal 
      title={`Edit ${username}'s Password`} 
      visible={visible} 
      onOk={handleOk} 
      okText="Confirm" 
      onCancel={handleClose}
    >
      <label><strong>Username</strong></label>
      <Input 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter username" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <br /><br />
      <label><strong>Role</strong></label>
      <br />
      <Select style={{width: '100%'}} value={role} onChange={(val) => setRole(val)} disabled={!user || getUser().username === user.username}>
        <Option value='user'>user</Option>
        <Option value='admin'>admin</Option>
      </Select>
      <br /><br />
      <Checkbox checked={editPasswordFlag} onChange={(e) => setEditPasswordFlag(e.target.checked)}>Edit Password</Checkbox>
      <br />
      <label><strong>Previous Password</strong></label>
      <Input 
        type='password'
        value={previousPassword} 
        onChange={(e) => setPreviousPassword(e.target.value)} 
        placeholder="Enter previous password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
        disabled={!editPasswordFlag}
      />
      <br /><br />
      <label><strong>New Password</strong></label>
      <Input 
        type='password'
        value={newPassword} 
        onChange={(e) => setNewPassword(e.target.value)} 
        placeholder="Enter current password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
        disabled={!editPasswordFlag}
      />
      <label><strong>Confirm Password</strong></label>
      <Input 
        type='password'
        value={confirmPassword} 
        onChange={(e) => setConfirmPassword(e.target.value)} 
        placeholder="Confirm your password" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
        disabled={!editPasswordFlag}
      />
      <p style={{color: "#f00"}}>{errorMessage}</p>
    </Modal>
  )
};

export default AdminEditAccount;
