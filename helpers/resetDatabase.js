/*
  This script drops all the existing collections from the database
*/

require('dotenv').config()

// import module from `../models/database.js`
const db = require("../models/database.js");

db.connect();

db.dropCollection("users", (val) => console.log(val));