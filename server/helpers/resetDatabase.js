/*
  This script drops all the existing collections from the database
*/

require('dotenv').config()

// import module from `../models/database.js`
const db = require("../models/database.js");

db.connect();

db.dropCollection("users", (val) => console.log(val));
db.dropCollection("contacts", (val) => console.log(val));
db.dropCollection("characters", (val) => console.log(val));
db.dropCollection("orders", (val) => console.log(val));
db.dropCollection("images", (val) => console.log(val));