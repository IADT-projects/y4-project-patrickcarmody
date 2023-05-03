const { Schema, model } = require('mongoose');

const charitySchema = Schema(
    {
        title: {
            type: String,
            required: [true]
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
            type:String,
            required: [true]
        },
        bannerImage: {
            type: String
        },
        logoImage: {
            type: String
        },
        address: {
            type: String,
            required: [true],
            unique: true,
        },
        website: {
            type: String
        }
    },
    { timestamps: true }
)

module.exports = model('Charity', charitySchema)