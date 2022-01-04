import React, { Component } from 'react';

import '../assets/styles/pages/UserInventory.css';

export default class UserInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      items: [{name: 'prod 1', supplier: 'abc', quantity: 10, datePurchased: 'December 3, 2021'}],
    };
  }

  render() {
    const { searchValue, items } = this.state;

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
            items.filter((item) => item.name.includes(searchValue)).map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.supplier}</td>
                  <td>{item.quantity}</td>
                  <td>{item.datePurchased}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )};
};