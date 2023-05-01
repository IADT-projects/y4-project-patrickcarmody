require('dotenv').config();
const {connect, disconnect} = require("../utils/db");
const Campaign = require('../models/campaign_schema');
const User = require('../models/user_schema');
const Charity = require('../models/charity_schema');
const campaigns = require('./campaign_seed.json')
const users = require('./user_seed.json')
const charities = require('./charity_seed.json')
const mongoose = require('mongoose')

const seedDB = async () => {
    await connect();
    await Campaign.deleteMany();
    await Campaign.insertMany(campaigns);
    console.log("Campaigns seeded");
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Users seeded");
    await Charity.deleteMany();
    await Charity.insertMany(charities);
    console.log("Charities Seeded");
};

seedDB().then(()=> {
	console.log("Database seeeded.")
    disconnect();
    console.log("Disconnected from database")
});