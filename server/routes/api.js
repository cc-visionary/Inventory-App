const express = require('express');
const router = express.Router();

router.get('/users/:id', (req, res, next) => {
  // get user
});

router.post('/users', (req, res, next) => {
  // create new user
});

router.put('/users/:id', (req, res, next) => {
  // update user
});

router.delete('/users/:id', (req, res, next) => {
  // delete user
});

module.exports = router;