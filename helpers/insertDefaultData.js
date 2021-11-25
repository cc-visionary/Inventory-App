/*
  This script inserts the following:
    1. 5 users to the collection "users" 
*/

require("dotenv").config();

// import bcrypt for encrypting the password by hashing
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync();

const users = [
    { username: "user", password: bcrypt.hashSync("password", saltRounds), userType: "user"},
    { username: "admin", password: bcrypt.hashSync("password", saltRounds), userType: "admin"},
]

// import module from `../models/database.js`
const db = require("../models/database.js");
const User = require("../models/UserModel");

db.connect();

db.insertMany(User, users, (res) => console.log(res));