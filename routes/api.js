const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const ProductController = require('../controllers/ProductController');

// Users API
router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserByID);

router.get('/users/username/:username', UserController.getUserByUsername);

router.post('/users/register', UserController.postRegister);

router.post('/users/login', UserController.postLogin);

router.post('/users/logout', UserController.postLogout);

router.patch('/users', UserController.patchUser);

router.delete('/users/:username', UserController.deleteUser);

// Products API
router.get('/products', ProductController.getAllProducts);

router.get('/products/:id', ProductController.getProductByID);

router.get('/products/name/:name', ProductController.getProductByName);

router.post('/products/add', ProductController.postAddProduct);

router.delete('/products/delete/:name', ProductController.deleteProduct);


module.exports = router;