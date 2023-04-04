require('dotenv').config();
const Campaign = require('../models/campaign_schema');
const { connect } = require('./db')
const campaigns = require('./seed_data.json')
const mongoose = require('mongoose')

const seedDB = async () => {
    mongoose.connect(process.env.DB_ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    await Campaign.deleteMany();
    await Campaign.insertMany(campaigns);
};

seedDB().then(()=> {
	console.log("Database seeeded.")
});