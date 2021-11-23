const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// TODO: test routes
// Users API
router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserByID);

router.get('/users/:id', UserController.getUserByUsername);

router.post('/users/register', UserController.postRegister)

router.post('/users/login', UserController.postLogin)

router.patch('/users/:id', UserController.patchUser)

router.delete('/users/:id', UserController.deleteUser)

module.exports = router;