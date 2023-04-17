const User = require('../models/user_schema');

const authRequired = (req, res, next) => {
    if(req.user) {
        next()
    }
    else {
        res.status(401).json({
            "error": "Unauthorised user, please log in"
        });
    }
};

module.exports = { authRequired };