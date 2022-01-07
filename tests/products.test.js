const app = require('../app');
const Product = require("../models/ProductModel");
const db = require('../models/database');
const request = require('supertest');
require("dotenv").config('../.env');

// Insert test users in database before testing
beforeAll(done => {

  db.connect(process.env.MONGODB_TEST_URL);

  const products = [
    { 
      name: "test_product_1", 
      date: "01/04/2022", 
      dateString: "January 4, 2022", 
      supplier: "Test Supplier",
      quantity: 1,
      location: "Test Location",
      price: 10,
      withdrawalAmount: 20
    },
    { 
      name: "test_product_2", 
      date: "01/04/2022", 
      dateString: "January 4, 2022", 
      supplier: "Test Supplier 2",
      quantity: 2,
      location: "Test Location 2",
      price: 20,
      withdrawalAmount: 30
    },
  ]

  db.insertMany(Product, products, (res) => done());
});

// Delete test products in database after testing
afterAll(done => {
  db.deleteOne(Product, {name: "test_product_3"}, (res) => {
    db.disconnect(() => {
      done();
    });
  });
});

// Unit Test 1: GET requests
describe('GET products', function() {
  it('gets all products with a status code of 200', (done) => {
    request(app)
      .get('/api/products')
      .expect(200, done);
  });

  it('gets the test product via name with a status code of 200,', (done) => {
    request(app)
      .get('/api/users/name/test_product_1')
      .expect(200, done);
  })
});

// Unit Test 2: POST requests
describe('POST products', function() {
    it('add a product', (done) => {
    request(app)
      .post('/api/products/add')
      .send({
        name: "test_product_0", 
        date: "01/04/2022", 
        dateString: "January 4, 2022", 
        supplier: "Test Supplier 0",
        quantity: 0,
        location: "Test Location 0",
        price: 0,
        withdrawalAmount: 0
      })
      .expect(200).end(function(err, res) {
        if (err) return done(err);
        db.deleteOne(Product, {name: "test_product_0"}, (res) => {});
        return done();
      })
  })
});

// Unit Test 3: DELETE requests
describe('DELETE products', function() {
  it('delete a product', (done) => {
    request(app)
      .delete('/api/products/delete/test_product_2')
      .expect(200, done)
  })
});

// TODO: Unit Test 4: PATCH requests
describe('PATCH products', function() {
  it('patch a product', (done) => {
    request(app)
      .patch('/api/products')
      .send({
        prevName: "test_product_1",
        name: "test_product_3", 
        date: "01/04/2022", 
        supplier: "Test Supplier 3",
        quantity: 0,
        location: "Test Location 3",
        price: 0,
        withdrawalAmount: 0
      })
      .expect(200, done)
  })
});