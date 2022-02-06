import React, { Component } from 'react';
import { DatePicker, Pagination } from 'antd';
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
      currentPage: 1,
      itemsPerPage: 10,
    };
  }

  componentDidMount() {
    ProductService.getAllProducts().then((res) => {
      const { result: products } = res.data;

      this.setState({ products: products.sort((a, b) => moment(a.dateString) - moment(b.dateString)) });
    })
  }

  resetFilter() {
    this.setState({ searchValue: '', fromDateFilter: null, toDateFilter: null })
  }

  render() {
    const { searchValue, products, fromDateFilter, toDateFilter, currentPage, itemsPerPage } = this.state;

    return (
    <div id='user-inventory'>
    <div className="header">
      <div>
        <input 
          className="search-input" 
          placeholder="Search" 
          onChange={(e) => this.setState({ currentPage: 1, searchValue: e.target.value })} 
          value={searchValue} 
        />
        <RangePicker 
          ranges={{
            Today: [moment(), moment()],
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
            products
              .filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) && (fromDateFilter === null || toDateFilter === null || (moment(item.date) >= fromDateFilter && moment(item.date) <= toDateFilter))))
              .slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage)
              .map((item) => (
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
      <Pagination 
        current={currentPage} 
        pageSize={itemsPerPage} 
        total={products.filter((item) => (item.name.toLowerCase().includes(searchValue.toLowerCase()) && (fromDateFilter === null || toDateFilter === null || (moment(item.date) >= fromDateFilter && moment(item.date) <= toDateFilter)))).length} 
        onChange={(page) => this.setState({ currentPage: page })} 
      />
    </div>
  )};
};