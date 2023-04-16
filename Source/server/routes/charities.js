const express = require('express');
const router = express.Router();

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
    .post('/', createData)
    .put('/:id', editData)
    .delete('/:id', deleteData)
module.exports = router;