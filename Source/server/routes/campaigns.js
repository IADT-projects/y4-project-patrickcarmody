const express = require('express');
const router = express.Router();

const { readData, readSingle, createData, editData, deleteData, searchCampaigns } = require('../controllers/campaign_controller.js');

router.get('/', readData)
    .get('/search', searchCampaigns)
    .get('/:id', readSingle)
    .post('/', createData)
    .put('/:id', editData)
    .delete('/:id', deleteData)
module.exports = router;