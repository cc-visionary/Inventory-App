import React, { useState } from 'react';

import { Modal, Input } from 'antd';

const EditProduct = ({ product, errorMessage, visible, onOk, onCancel }) => {
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
      title="Edit Product" 
      visible={visible} 
      onOk={handleOk} 
      okText="Edit" 
      onCancel={handleCancel}
    >
      <p style={{color: "#f00"}}>{errorMessage}</p>
    </Modal>
  )
};

export default EditProduct;