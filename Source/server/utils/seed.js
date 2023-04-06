require('dotenv').config();
const Campaign = require('../models/campaign_schema');
const User = require('../models/user_schema');
const { connect } = require('./db')
const campaigns = require('./campaign_seed.json')
const users = require('./user_seed.json')
const mongoose = require('mongoose')

const seedDB = async () => {
    mongoose.connect(process.env.DB_ATLAS_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    });
    await Campaign.deleteMany();
    await Campaign.insertMany(campaigns);
    console.log("Campaigns seeded.");
    await User.deleteMany();
    await User.insertMany(users);
    console.log("Users seeded.");
};

seedDB().then(()=> {
	console.log("Database seeeded.")
});