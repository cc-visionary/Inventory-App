import React, { Component } from 'react';
import { DatePicker, Modal, Pagination } from 'antd';
import moment from 'moment';

import { ProductService } from '../services';
import { AddProduct, EditProduct } from '../components';

import editIcon from '../assets/images/Edit Icon.svg';
import trashIcon from '../assets/images/Trash Icon.svg';

import '../assets/styles/pages/AdminInventory.css';

const { RangePicker } = DatePicker;

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
      fromDateFilter: null,
      toDateFilter: null,
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    ProductService.getAllProducts().then((res) => {
      const { result: products } = res.data;

      this.setState({ products: products.sort((a, b) => moment(a.dateString) - moment(b.dateString)), count: products.length });
    })
  }

  addProduct(productName, quantity, price, supplier, location, datePurchased) {
    const { products, count } = this.state;

    productName = productName.trim();
    supplier = supplier.trim();
    location = location.trim();

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
      
        this.setState({ products: [...products, result].sort((a, b) => moment(a.dateString) - moment(b.dateString)), count: count + 1, addProductVisible: false, addProductError: "" })
        
        Modal.success({
          content: 'Product has been successfully added.',
        });
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

    productName = productName.trim();
    supplier = supplier.trim();
    location = location.trim();

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

        Modal.success({
          content: 'Product has been successfully updated.',
        });
        
        const index = products.indexOf(toBeEdited);
        this.setState({ products: [...products.slice(0, index), result, ...products.slice(index + 1)].sort((a, b) => moment(a.dateString) - moment(b.dateString)), toBeEdited: null, editProductVisible: false, editProductError: "" })
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
          const updatedProducts = [...products.slice(0, index), ...products.slice(index + 1)].sort((a, b) => moment(a.dateString) - moment(b.dateString));
          this.setState({ products: updatedProducts, count: updatedProducts.length });
          Modal.success({
            content: 'Product has been successfully deleted.',
          });
        })
        .catch((err) => {
          console.log(err.response.data);
        })
      }
    });
  }

  resetFilter() {
    this.setState({ searchValue: '', fromDateFilter: null, toDateFilter: null })
  }

  render() {
    const { searchValue, products, count, addProductVisible, addProductError, editProductVisible, editProductError, toBeEdited, fromDateFilter, toDateFilter, currentPage, itemsPerPage } = this.state;
    return <div id='admin-inventory'>
    <div className='header'>
      <div className='left'>
        <input 
          className="search-input" 
          placeholder="Search" 
          onChange={(e) => this.setState({ currentPage: 1, searchValue: e.target.value })} 
          value={searchValue} 
        />
        <RangePicker 
          ranges={{
            'Today': [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          value={[fromDateFilter, toDateFilter]} 
          onChange={(val) => this.setState({ currentPage: 1, fromDateFilter: val === null ? null : val[0].set("hour", 0).set("minute", 0).set("second", 0), toDateFilter: val === null ? null : val[1].set("hour", 23).set("minute", 59).set("second", 59)})} 
          bordered={false} 
        />
        <button 
          className="header-product-button" 
          onClick={() => this.resetFilter()}
        >
          Reset Filter
        </button>
        <button 
          className="header-product-button" 
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
            products
              .filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) && (fromDateFilter === null || toDateFilter === null || (moment(item.date) >= fromDateFilter && moment(item.date) <= toDateFilter))))
              .slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
              .map((item) => (
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
      <Pagination 
        current={currentPage} 
        pageSize={itemsPerPage} 
        total={products.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) && (fromDateFilter === null || toDateFilter === null || (moment(item.date) >= fromDateFilter && moment(item.date) <= toDateFilter)))).length} 
        onChange={(page) => this.setState({ currentPage: page })} 
      />
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