const app = require('../app');
const User = require("../models/UserModel");
const db = require('../models/database');
const request = require('supertest');
require("dotenv").config('../.env');
let delete_id;
// Insert test users in database before testing
beforeAll(done => {

  db.connect(process.env.MONGODB_TEST_URL);

  const bcrypt = require("bcrypt");
  const saltRounds = bcrypt.genSaltSync();
  
  const users = [
    { username: "test_user_1", password: bcrypt.hashSync("password", saltRounds), userType: "user"},
    { username: "test_user_2", password: bcrypt.hashSync("password", saltRounds), userType: "user"},
  ]

  db.insertMany(User, users, (res) => {
    delete_id = res.result[1]._id.toString();
    done();
  });
});

// Delete test users in database after testing
afterAll(done => {
  db.deleteOne(User, {username: "test_user_1"}, (res) => {
    db.disconnect(() => {
      done();
    });
  });
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
      .get('/api/users/61d53cd5352af9b592d58f6e')
      .expect(200, done);
  })
});

// Unit Test 2: POST requests
describe('POST users', function() {
    it('register a user', (done) => {
    request(app)
      .post('/api/users/register')
      .send({username: 'test_user_0'})
      .expect(200).end(function(err, res) {
        if (err) return done(err);
        db.deleteOne(User, {username: "test_user_0"}, (res) => {});
        return done();
      })
  })

  
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
      .delete(`/api/users/${delete_id}`)
      .expect(200, done)
  })
});

// TODO: Unit Test 4: PATCH requests
