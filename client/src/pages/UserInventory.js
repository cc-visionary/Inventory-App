import React, { Component } from 'react';

import '../assets/styles/pages/UserInventory.css';
import { ProductService } from '../services';

export default class UserInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      products: [],
    };
  }

  componentDidMount() {
    ProductService.getAllProducts().then((res) => {
      const { result: products } = res.data;

      this.setState({ products });
    })
  }

  render() {
    const { searchValue, products } = this.state;

    return (
    <div id='user-inventory'>
    <div className="header">
      <input 
        className="search-input" 
        placeholder="Search" 
        onChange={(e) => this.setState({ searchValue: e.target.value })} 
        value={searchValue} 
      />
      <></>
    </div>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Supplier</th>
            <th>Quantity</th>
            <th>Date Purchased</th>
          </tr>
        </thead>
        <tbody>
          {
            // maps per user to the table
            products.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>{item.dateString}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )};
};