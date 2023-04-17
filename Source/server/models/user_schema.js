const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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
        biography: {
            type: String,
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

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = model('User', userSchema);