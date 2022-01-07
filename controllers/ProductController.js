// import module from `../models/database.js`
const db = require("../models/database.js");

// import ProductSchema from `../models/ProductModel.js`
const Product = require("../models/ProductModel");

// import helper function defaultCallback from `../helpers/defaultCallback`
const defaultCallback = require("../helpers/defaultCallback");
const auxiliaryController = require(`./AuxiliaryController.js`);

const ProductController = {

  postAddProduct: (req, res) => {
    const {
      supplier,
      quantity,
      location,
      price,
      name,
    } = req.body;

    const date = new Date(req.body.date);
    const dateString = auxiliaryController.convertDateString(date);

    const product = {
      date,
      dateString,
      supplier,
      quantity,
      location,
      price,
      name,
    }

    db.insertOne(Product, product, (result) => defaultCallback(res, result));
  },

  getProductByID: (req, res) => {
    const { id } = req.params;

    db.findById(Product, id, (result) => defaultCallback(res, result));
  },

  getAllProducts: (req, res) => {
    db.findMany(Product, {}, (result) => defaultCallback(res, result));
  },

  getProductByName: (req, res) => {
    const { name } = req.params;

    db.findOne(Product, { name }, (result) => defaultCallback(res, result));
  },

  patchProduct: (req, res) => {
    const {
      supplier,
      quantity,
      location,
      price,
      prevName,
      name,
    } = req.body;

    const date = new Date(req.body.date);
    const dateString = auxiliaryController.convertDateString(date);

    const updatedProduct = {
      date,
      dateString,
      supplier,
      quantity,
      location,
      price,
      name,
    }

    db.findOne(Product, {name}, (result) => {
      let data = result.result;
      
      if(prevName !== name) {
        if(data === null) {
          db.findOne(Product, {name: prevName}, (result) => {
            const data = result.result;
      
            if(data == null) 
              res.status(401).send("Product not found");
            else 
              db.updateOne(Product, { name: prevName }, updatedProduct, (result) => res.status(200).send({...result, result: { name, supplier, quantity, dateString, price, location }}));
          });
        } else res.status(401).send("Product with the same name already exists.");
      } else {
        db.updateOne(Product, { name: prevName }, updatedProduct, (result) => res.status(200).send({...result, result: { name, supplier, quantity, dateString, price, location }}));
      }
    })

    
  },

  deleteProduct: (req, res) => {
    const { name } = req.params;

    db.deleteOne(Product, { name }, (result) => defaultCallback(res, result));
  },
};
/*
    exports the object `ProductController` (defined above)
    when another script exports from this file
*/
module.exports = ProductController;
