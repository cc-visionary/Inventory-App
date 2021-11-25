const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// TODO: test routes
// Users API
router.get('/users', UserController.getAllUsers);

router.get('/users/:id', UserController.getUserByID);

router.get('/users/username/:username', UserController.getUserByUsername);

router.post('/users/register', UserController.postRegister)

router.post('/users/login', UserController.postLogin)

router.post('/users/logout', UserController.postLogout)

router.patch('/users', UserController.patchUser)

router.delete('/users/:username', UserController.deleteUser)

module.exports = router;