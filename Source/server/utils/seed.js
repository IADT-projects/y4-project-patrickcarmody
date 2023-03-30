require('dotenv').config();
const Campaign = require('../models/campaign_schema');
const { connect } = require('./db')
const campaigns = require('./seed_data.json')

const seedDB = async () => {
    await connect();
    await Campaign.deleteMany();
    await Campaign.insertMany(campaigns);
};

seedDB().then(()=> {
	console.log("Database seeeded.")
});