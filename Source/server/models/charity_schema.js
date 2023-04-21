const { Schema, model } = require('mongoose');

const charitySchema = Schema(
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
            type:String
        },
        bannerImage: {
            type: String
        },
        logoImage: {
            type: String
        },
        address: {
            type: String
        },
        website: {
            type: String
        }
    }
)

module.exports = model('Charity', charitySchema)