const { Schema, model } = require('mongoose');

const campaignSchema = Schema(
    {
        title: {
            type: String
        },
        description: {
            type: String
        },
        category: {
            type: String
        },
        creator: {
            type: String
        },
        goal: {
            type: Number
        },
        image: {
            type: String
        },
        address: {
            type: String
        }
    }
);

module.exports = model('Campaign', campaignSchema);