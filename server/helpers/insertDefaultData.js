/*
  This script inserts the following:
    1. 5 users to the collection "users" 
*/

// import bcrypt for encrypting the password by hashing
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync();

const users = [

]

require("dotenv").config();

// import module from `../models/database.js`
const db = require("../models/database.js");
const User = require("../models/UserModel");

db.connect();

db.insertMany(User, users, (res) => console.log(res));