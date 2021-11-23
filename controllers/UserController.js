// import module from `../models/database.js`
const db = require("../models/database.js");

// import UserSchema from `../models/UserModel.js`
const User = require("../models/UserModel");

// import bcrypt for encrypting the password by hashing
const bcrypt = require("bcrypt");
const saltRounds = 8;

// import helper function defaultCallback from `../helpers/defaultCallback`
const defaultCallback = require("../helpers/defaultCallback");

// TODO: test functions
const UserController = {

  postRegister: (req, res) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        req.body.password = hash
      
        const {
          username,
          email,
          password,
          userType
        } = req.body;
    
        const user = {
          username,
          email,
          password,
          userType
        };
  
        db.insertOne(User, user, (result) => defaultCallback(res, result));
      });
    });
  },

  postLogin: (req, res) => {
    const {
      email,
      password
    } = req.body

    db.findOne(User, {email: email}, (result) => {
      bcrypt.compare(password, result.password, function(err, isEqual) {
        if(isEqual) {
          req.session.user = result;
          result.password = password;
          res.status(200).send("Login Success");
        } else {
          res.status(401).send("Invalid Credentials");
        }
      });
    });
  },

  getUserByID: (req, res) => {
    const { _id } = req.params;

    db.findOne(User, { _id }, (result) => defaultCallback(res, result));
  },

  getAllUsers: (req, res) => {
    db.findMany(User, {}, (result) => defaultCallback(res, result));
  },

  getUserByUsername: (req, res) => {
    const { username } = req.params;

    db.findOne(User, { username }, (result) => defaultCallback(res, result));
  },

  // TODO: bcrypt password change
  patchUser: (req, res) => {
    const {
      id, 
      username,
      email,
      password,
      userType,
    } = req.body;

    const user = {
      username,
      email,
      password,
      userType
    };

    db.updateOne(User, { _id: id }, user, (result) => defaultCallback(res, result));
  },

  deleteUser: (req, res) => {
    const { id } = req.params;

    db.deleteOne(User, { _id: id }, (result) => defaultCallback(res, result));
  },
};
/*
    exports the object `UserController` (defined above)
    when another script exports from this file
*/
module.exports = UserController;
