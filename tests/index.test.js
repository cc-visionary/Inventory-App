const app = require('../index');
const User = require("../models/UserModel");
const db = require('../models/database');
const request = require('supertest');

// Insert test users in database before testing
beforeAll(() => {
  const bcrypt = require("bcrypt");
  const saltRounds = bcrypt.genSaltSync();
  require("dotenv").config('../.env');
 
  db.connect();

  const users = [
    { username: "test_user_1", password: bcrypt.hashSync("password", saltRounds), userType: "user"},
    { username: "test_user_2", password: bcrypt.hashSync("password", saltRounds), userType: "user"},
  ]

  db.insertMany(User, users, (res) => console.log(res));
});

// Delete test users in database after testing
afterAll(() => {
  // db.deleteOne(User, {username: "test_user_0"}, (res) => {});
  db.deleteOne(User, {username: "test_user_1"}, (res) => {});
});

// Unit Test 1: GET requests
describe('GET users', function() {
  it('gets all users with a status code of 200', (done) => {
    request(app)
      .get('/api/users')
      .expect(200, done);
  });

  it('gets the admin account via username with a status code of 200,', (done) => {
    request(app)
      .get('/api/users/username/admin')
      .expect(200, done);
  })

  it('gets the admin account via id with a status code of 200,', (done) => {
    request(app)
      .get('/api/users/619ed0fbf212738bb094385f')
      .expect(200, done);
  })
});

// Unit Test 2: POST requests
describe('POST users', function() {
  /*
    it('register a user', (done) => {
    request(app)
      .post('/api/users/register')
      .send({username: 'test_user_0'})
      .expect(200, done)
  })
 */
  
  it('login admin', (done) => {
    request(app)
      .post('/api/users/login')
      .send({username: 'admin', password: 'password'})
      .expect(200, done)
  })
});

// Unit Test 3: DELETE requests
describe('DELETE users', function() {
  it('delete a user', (done) => {
    request(app)
      .delete('/api/users/test_user_2')
      .expect(200, done)
  })
});