const { Schema, model } = require('mongoose');

const userSchema = Schema (
    {
        address: {
            type: String,
            required: [true],
        },
        first_name: {
            type: String,
            required: [true],
        },
        last_name: {
            type: String,
            required: [true],
        },
        email: {
            type: String,
            required: [true]
        },
        password: {
            type: String,
            required: [true]
        },
        image: {
            type: String,
        }
    },
    { timestamps: true }
);

module.exports = model('User', userSchema);