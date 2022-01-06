import React, { Component } from 'react';
import { Modal } from 'antd';

import { ProductService } from '../services';
import { AddProduct, EditProduct } from '../components';

import editIcon from '../assets/images/Edit Icon.svg';
import trashIcon from '../assets/images/Trash Icon.svg';

import '../assets/styles/pages/AdminInventory.css';
import moment from 'moment';

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
      this.setState({ addProductError: "Product Name cannot be empty" });
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
      this.setState({ addProductError: "Stock Location cannot be empty" });
      return;
    }

    if(datePurchased === null) {
      this.setState({ addProductError: "Date Purchased cannot be empty" });
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
        alert("Product has been successfully added.")
      })
      .catch((err) => {
        const { error } = err.response.data;
        if(error.code === 11000) {
          this.setState({ addProductError: "Product name already exists" })
        }
      });
    }

  editProduct(productName, quantity, price, supplier, location, datePurchased) {
    const { products, toBeEdited } = this.state;

    if(productName === null || productName === '') {
      this.setState({ editProductError: "Product Name cannot be empty" });
      return;
    }

    if(quantity < 1) {
      this.setState({ editProductError: "Quantity has to be greater than 0" });
      return;
    }

    if(price < 1) {
      this.setState({ editProductError: "Price has to be greater than 0" });
      return;
    }

    if(supplier === null || supplier === '') {
      this.setState({ editProductError: "Supplier cannot be empty" });
      return;
    }

    if(location === null || location === '') {
      this.setState({ editProductError: "Stock Location cannot be empty" });
      return;
    }

    if(datePurchased === null) {
      this.setState({ editProductError: "Date Purchased cannot be empty" });
      return;
    }

    const previousDate = moment(toBeEdited.date)
    const presentDate = moment(datePurchased)

    if(previousDate.format('MMMM DD, YYYY') === presentDate.format('MMMM DD, YYYY') && toBeEdited.name === productName && toBeEdited.quantity === quantity && toBeEdited.price === price && toBeEdited.price === price && toBeEdited.location === location && toBeEdited.supplier === supplier) {
      this.setState({ editProductError: "There were no changes made" });
      return;
    }

    const product = {
      supplier,
      location,
      date: datePurchased,
      name: productName,
      quantity,
      prevName: toBeEdited.name,
      price
    }

    ProductService.patchProduct(product)
      .then((res) => {
        const { result } = res.data;

        console.log(result)

        alert("Product has been successfully updated.")
        
        const index = products.indexOf(toBeEdited);
        this.setState({ products: [...products.slice(0, index), result, ...products.slice(index + 1)], toBeEdited: null, editProductVisible: false, editProductError: "" })
      })
      .catch((err) => {
        const { data } = err.response;

        this.setState({ editProductError: data });
      })
  }

  onDelete(product) {
    const { products } = this.state;

    // asks for admin confirmation on whether or not to delete the product
    Modal.confirm({
      title: `Are you sure you want to delete ${product.name}`,
      onOk: async () => {
        ProductService.deleteProduct(product.name)
        .then(() => {
          const index = products.indexOf(product);
          const updatedProducts = [...products.slice(0, index), ...products.slice(index + 1)];
          this.setState({ products: updatedProducts, count: updatedProducts.length });
          alert(`Deletion was successful`)
        })
        .catch((err) => {
          console.log(err.response.data);
        })
      }
    });
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
            <th>Product Name</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Location</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            // maps per product to the table
            products.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <tr key={item.name}>
                  <td>{item.dateString}</td>
                  <td>{item.name}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>P {parseFloat(item.price).toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
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