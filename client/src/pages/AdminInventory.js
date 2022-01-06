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

  addProduct(productName, quantity, price, supplier, location, datePurchased) {
    const { products, count } = this.state;

    if(productName === null || productName === '') {
      this.setState({ addProductError: "Username cannot empty" });
      return;
    }

    if(quantity < 1) {
      this.setState({ addProductError: "Quantity has to be greater than 0" });
      return;
    }

    if(price < 1) {
      this.setState({ addProductError: "Price has to be greater than 0" });
      return;
    }

    if(supplier === null || supplier === '') {
      this.setState({ addProductError: "Supplier cannot empty" });
      return;
    }

    if(location === null || location === '') {
      this.setState({ addProductError: "Stock Location cannot empty" });
      return;
    }

    if(datePurchased === null) {
      this.setState({ addProductError: "Date Purchased cannot empty" });
      return;
    }

    const product = {
      supplier,
      location,
      date: datePurchased,
      name: productName,
      quantity,
      price
    }

    ProductService.postAddProduct(product)
      .then((res) => {
        const { result } = res.data
      
        this.setState({ products: [...products, result], count: count + 1, addProductVisible: false, addProductError: "" })
      })
      .catch((err) => {
        const { error } = err.response.data;
        if(error.code === 11000) {
          this.setState({ addProductError: "Product name already exists" })
        }
      });
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
        onOk={(productName, quantity, price, supplier, location, datePurchased) => this.addProduct(productName, quantity, price, supplier, location, datePurchased)}
        onCancel={() => this.setState({ addProductVisible: false, addProductError: '' })}
      />
      <EditProduct 
        product={toBeEdited}
        errorMessage={editProductError}
        visible={editProductVisible} 
        onOk={(productName, quantity, price, supplier, location, datePurchased) => this.editProduct(productName, quantity, price, supplier, location, datePurchased)}
        onCancel={() => this.setState({ editProductVisible: false, editProductError: '' })}
      />
    </div>
  }
};