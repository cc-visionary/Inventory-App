import React, { useEffect, useState } from 'react';
import { Modal, Input, InputNumber, DatePicker } from 'antd';
import moment from 'moment';

const EditProduct = ({ product, errorMessage, visible, onOk, onCancel }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(1);
  const [supplier, setSupplier] = useState('');
  const [location, setLocation] = useState('');
  const [datePurchased, setDatePurchased] = useState(moment());

  useEffect(() => {
    clearFields();
  }, [product])

  const clearFields = () => {
    if(product) {
      setProductName(product.name);
      setQuantity(product.quantity);
      setPrice(product.price);
      setSupplier(product.supplier);
      setLocation(product.location);
      console.log(product.date)
      setDatePurchased(moment(product.date));
    }
  }

  const handleOk = () => {
    onOk(productName, quantity, price, supplier, location, datePurchased);
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
      <label><strong>Product Name</strong></label>
      <Input 
        name="product_name"
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
        placeholder="Enter product name" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <label><strong>Quantity</strong></label>
          <InputNumber 
            name="quantity"
            min={1}
            value={quantity} 
            onChange={(val) => setQuantity(val)} 
            placeholder="Enter product name" 
            onKeyPress={(e) => e.key === 'Enter' && handleOk()}
            style={{width: '100%'}} 
          />
        </div>
        <div>
          <label><strong>Price</strong></label>
          <InputNumber 
            name="price"
            min={1}
            value={price} 
            onChange={(val) => setPrice(val)} 
            placeholder="Enter product name" 
            onKeyPress={(e) => e.key === 'Enter' && handleOk()}
            style={{width: '100%'}} 
          />
        </div>
      </div>
      <label><strong>Supplier</strong></label>
      <Input 
        name="supplier"
        value={supplier} 
        onChange={(e) => setSupplier(e.target.value)} 
        placeholder="Enter product name" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <label><strong>Stock Location</strong></label>
      <Input 
        name="location"
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter product name" 
        onKeyPress={(e) => e.key === 'Enter' && handleOk()}
      />
      <label><strong>Date Purchased</strong></label>
      <br />
      <DatePicker 
        name="date_purchased"
        value={datePurchased}
        format='MMMM DD, YYYY'
        onChange={(val) => setDatePurchased(val)}
        style={{width: '100%'}} 
      />
      <p style={{color: "#f00"}}>{errorMessage}</p>
    </Modal>
  )
};

export default EditProduct;