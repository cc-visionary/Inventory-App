import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

import { ProductService } from '../services';

import '../assets/styles/pages/UserInventory.css';

const { RangePicker } = DatePicker;

export default class UserInventory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: '',
      products: [],
      fromDateFilter: null,
      toDateFilter: null,
    };
  }

  componentDidMount() {
    ProductService.getAllProducts().then((res) => {
      const { result: products } = res.data;

      this.setState({ products });
    })
  }

  resetFilter() {
    this.setState({ searchValue: '', fromDateFilter: null, toDateFilter: null })
  }

  render() {
    const { searchValue, products, fromDateFilter, toDateFilter } = this.state;

    return (
    <div id='user-inventory'>
    <div className="header">
      <div>
        <input 
          className="search-input" 
          placeholder="Search" 
          onChange={(e) => this.setState({ searchValue: e.target.value })} 
          value={searchValue} 
        />
        <RangePicker 
          ranges={{
            Today: [moment(), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
          value={[fromDateFilter, toDateFilter]} 
          onChange={(val) => this.setState({ fromDateFilter: val === null ? null : val[0], toDateFilter: val === null ? null : val[1]})} 
          bordered={false} 
        />
        <button 
          className="header-product-button" 
          onClick={() => this.resetFilter()}
        >
          Reset Filter
        </button>
      </div>
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
            products.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) && (fromDateFilter === null || toDateFilter === null || (moment(item.date) >= fromDateFilter && moment(item.date) <= toDateFilter)))).map((item) => (
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