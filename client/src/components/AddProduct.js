import React, { useState } from 'react';

import { Modal, Input } from 'antd';

const AddProduct = ({ errorMessage, visible, onOk, onCancel }) => {
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

  return(
    <Modal 
      title="Add Product" 
      visible={visible} 
      onOk={handleOk} 
      okText="Add" 
      onCancel={handleCancel}
    >
      <p style={{color: "#f00"}}>{errorMessage}</p>
    </Modal>
  )
};

export default AddProduct;