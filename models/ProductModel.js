var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    dateString: {
        type: String,
        required: true
    },
    supplier:{
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        unique: true,
        required: true
    }
});

/*
*    Exports a mongoose.model object based on `PersonnelSchema`when another script exports from this file
*    This model executes CRUD operations to collection `personnel`
*/
module.exports = mongoose.model('Product', ProductSchema);
