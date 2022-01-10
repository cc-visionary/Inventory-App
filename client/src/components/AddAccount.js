import React, { useState } from 'react';

import { Modal, Input } from 'antd';

const AddAccount = ({ errorMessage, visible, onOk, onCancel }) => {
  const [username, setUsername] = useState('');

  const clearFields = () => {
    setUsername('');
  }

  const handleOk = () => {
    onOk(username);
    clearFields();
  }

  const handleCancel = () => {
    onCancel();
    clearFields();
  }

  return (
    <Modal 
      title="Add Account" 
      visible={visible} 
      onOk={handleOk} 
      okText="Add" 
      onCancel={handleCancel}
    >
      <label><strong>Username</strong></label>
      <Input 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter username" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <p style={{color: "#f00"}}>{errorMessage}</p>
      <p>Note: Password will automatically generated.</p>
    </Modal>
  )
};

export default AddAccount;