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
    const password = Math.random().toString(36).slice(2);

    bcrypt.hash(password, saltRounds, (err, hash) => {
      const hashed_password = hash;
    
      const {
        username,
        userType
      } = req.body;
  
      const user = {
        username,
        password: hashed_password,
        userType: userType == null ? "user" : userType
      };

      db.insertOne(User, user, (result) => defaultCallback(res, {...result, password}));
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

  // mainly changes the password of the user
  patchUser: (req, res) => {
    const { 
      username,
      previousPassword,
      newPassword,
    } = req.body;

    db.findOne(User, {username}, (result) => {
      const data = result.result;

      if(data == null) {
        // if no username matches the users 
        res.status(401).send("Invalid Username");
      } else {
        bcrypt.compare(previousPassword, data.password, function(err, isEqual) {
          if(isEqual) {
            const user = {
              username: data.username,
              password: bcrypt.hashSync(newPassword, saltRounds),
              userType: data.userType,
            }

            db.updateOne(User, { username }, user, (result) => res.status(200).send("Successfully updated the password"));
          } else {
            // if matches a user, but incorrect password
            res.status(401).send("Previous password is incorrect");
          }
        });
      }
    });
  },

  deleteUser: (req, res) => {
    const { username } = req.params;

    db.deleteOne(User, { username }, (result) => defaultCallback(res, result));
  },
};
/*
    exports the object `UserController` (defined above)
    when another script exports from this file
*/
module.exports = UserController;
