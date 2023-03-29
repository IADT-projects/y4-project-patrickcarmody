const express = require('express');
const router = express.Router();

const { readData, readSingle, createData, editData, deleteData, searchData, filterByCategory} = require('../controllers/campaign_controller.js');

router.get('/', readData)
    .get('/search', searchData)
    .get('/:id', readSingle)
    .get('/filter', filterByCategory)
    .post('/', createData)
    .put('/:id', editData)
    .delete('/:id', deleteData)
module.exports = router;