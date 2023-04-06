const express = require('express');
const router = express.Router();

const { 
    register, 
    readData,
    readSingle,
    editUser,
    deleteUser
  } = require('../controllers/user_controller');

  router
  .get('/', readData)
  .get('/:id', readSingle)
  .post('/register', register)
  .put('/:id', editUser)
  .delete('/:id', deleteUser)
module.exports = router;