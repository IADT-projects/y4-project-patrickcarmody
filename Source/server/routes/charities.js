const express = require('express');
const router = express.Router();

const {authRequired} = require('../controllers/auth_controller');
const {
    readData,
    readSingle,
    createData,
    editData,
    deleteData
} = require('../controllers/charity_controller');

router
    .get('/', readData)
    .get('/:id', readSingle)
    .post('/', authRequired, createData)
    .put('/:id', authRequired, editData)
    .delete('/:id', authRequired, deleteData)
module.exports = router;