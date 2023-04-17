const express = require('express');
const router = express.Router();

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
  .put('/:id', editUser)
  .delete('/:id', deleteUser)
  .post('/login', login)
module.exports = router;