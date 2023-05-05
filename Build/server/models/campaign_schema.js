const { Schema, model } = require('mongoose');

const campaignSchema = Schema(
    {
        title: {
            type: String,
            required: [true],
        },
        description: {
            type: String,
            required: [true]
        },
        category: {
            type: String,
            required: [true]
        },
        creator: {
            type: String,
            required: [true]
        },
        goal: {
            type: Number,
            required: [true]
        },
        image: {
            type: String
        },
        address: {
            type: String,
            required: [true],
            unique: true,
        }
    },
    { timestamps: true }
);

module.exports = model('Campaign', campaignSchema);