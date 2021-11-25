// import module from `../models/database.js`
const db = require("../models/database.js");

// import UserSchema from `../models/UserModel.js`
const User = require("../models/UserModel");

// import bcrypt for encrypting the password by hashing
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync();

// import helper function defaultCallback from `../helpers/defaultCallback`
const defaultCallback = require("../helpers/defaultCallback");
const { response } = require("express");

// TODO: test patchUser
const UserController = {

  postRegister: (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
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
  },

  postLogin: (req, res) => {
    const {
      username,
      password
    } = req.body

    if(username == '' || username == null) {
      res.status(401).send("Username is empty");
      return;
    }

    if(password == '' || password == null) {
      res.status(401).send("Password is empty");
      return;
    }

    db.findOne(User, {username}, (result) => {
      const data = result.result;

      if(data == null) {
        // if no username matches the users 
        res.status(401).send("Invalid Credentials");
      } else {
        bcrypt.compare(password, data.password, function(err, isEqual) {
          if(isEqual) {
            req.session.user = data;
            req.session.user.password = password;
            res.status(200).send({userType: data.userType, message: "Login Success"});
          } else {
            // if matches a user, but incorrect password
            res.status(401).send("Invalid Credentials");
          }
        });
      }
    });
  },

  postLogout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(401).send("Logout Failed");
        throw err;
      }
      res.status(200).send("Logout Success");
    });
  },

  getUserByID: (req, res) => {
    const { id } = req.params;

    db.findById(User, id, (result) => defaultCallback(res, result));
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
