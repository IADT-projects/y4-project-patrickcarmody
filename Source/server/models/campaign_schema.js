const { Schema, model } = require('mongoose');

const campaignSchema = Schema(
    {
        address: {
            type: String
        },
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
        }
    }
);

module.exports = model('Campaign', campaignSchema);