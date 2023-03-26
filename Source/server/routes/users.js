const express = require('express');
const router = express.Router();

const { 
    register, 
    readUser,
    readUsers,
    editUser,
    deleteUser
  } = require('../controllers/user_controller');

  router
  .post('/register', register)
  .get('/', readUsers)
  .get('/:id', readUser)
  .put('/:id', editUser)
  .delete('/:id', deleteUser)
module.exports = router;