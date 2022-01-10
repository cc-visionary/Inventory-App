import React, { Component } from 'react';

import { ProductService } from '../services';
import { AddProduct, EditProduct } from '../components';

import editIcon from '../assets/images/Edit Icon.svg';
import trashIcon from '../assets/images/Trash Icon.svg';

import '../assets/styles/pages/AdminInventory.css';

export default class AdminInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      products: [],
      count: 0,
      toBeEdited: null,
      addProductVisible: false,
      addProductError: '',
      editProductVisible: false,
      editProductError: '',
    };
  }

  componentDidMount() {
    ProductService.getAllProducts().then((res) => {
      const { result: products } = res.data;

      this.setState({ products, count: products.length });
    })
  }

  addProduct() {

  }

  editProduct() {

  }

  render() {
    const { searchValue, products, count, addProductVisible, addProductError, editProductVisible, editProductError, toBeEdited } = this.state;
    return <div id='admin-inventory'>
    <div className="header">
      <div>
        <input 
          className="search-input" 
          placeholder="Search" 
          onChange={(e) => this.setState({ searchValue: e.target.value })} 
          value={searchValue} 
        />
        <button 
          className="add-product-button" 
          onClick={() => this.setState({ addProductVisible: true })}
        >
          Add Product
        </button>
      </div>
      <div className="product-stats">
        Products: <span className="count">{count}</span>
      </div>
    </div>
      <table>
        <thead>
          <tr>
            <th>Date Purchased</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Location</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            // maps per product to the table
            products.filter((item) => item.name.includes(searchValue)).map((item) => (
                <tr key={item.name}>
                  <td>{item.dateString}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>{item.name}</td>
                  <td>P {item.price}</td>
                  <td>{item.location}</td>
                  <td>
                    <button 
                      className="edit-button" 
                      onClick={() => this.setState({ editProductVisible: true, toBeEdited: item })}
                    >
                      <img src={editIcon} alt="Edit" />
                    </button>
                    <button 
                      className="delete-button" 
                      onClick={() => this.onDelete(item)} 
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
      <AddProduct 
        errorMessage={addProductError} 
        visible={addProductVisible}
        onOk={() => this.addProduct()}
        onCancel={() => this.setState({ addProductVisible: false, addProductError: '' })}
      />
      <EditProduct 
        product={toBeEdited}
        errorMessage={editProductError}
        visible={editProductVisible} 
        onOk={() => this.editProduct()}
        onCancel={() => this.setState({ editProductVisible: false, editProductError: '' })}
      />
    </div>
  }
};