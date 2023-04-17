const express = require('express');
const router = express.Router();

const {authRequired} = require('../controllers/auth_controller');
const { 
    register, 
    readData,
    readSingle,
    editUser,
    deleteUser,
    login
  } = require('../controllers/user_controller');

  router
  .get('/', readData)
  .get('/:id', readSingle)
  .post('/register', register)
  .post('/login', login)
  .put('/:id', authRequired, editUser)
  .delete('/:id', authRequired, deleteUser)

module.exports = router;