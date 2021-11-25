import React, { useState } from 'react';

import { Modal, Input } from 'antd';

const AddAccount = ({ errorMessage, visible, onOk, onCancel }) => {
  const [username, setUsername] = useState('');

  return (
    <Modal title="Add Account" visible={visible} onOk={() => onOk(username)} okText="Create" onCancel={onCancel}>
      <label><strong>Username</strong></label>
      <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
      <p style={{color: "#f00"}}>{errorMessage}</p>
      <p>Note: Password will automatically generated.</p>
    </Modal>
  )
};

export default AddAccount;