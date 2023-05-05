const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3005;

require('dotenv').config();
require('./utils/db.js').connect();

app.use(express.json());

app.use((req, res, next) => {
    if(req.headers?.authorization?.split(' ')[0] === 'Bearer'){
        console.log("User")
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.APP_KEY, (err, decoded) => {
            console.log("Authorization Success")
            if(err) req.user = undefined;
            req.user = decoded;
            next();
        });
    }
    else {
        console.log("No Authorization")
        req.user = undefined;
        next();
    }
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/users', require('./routes/users.js'));
app.use('/campaigns', require('./routes/campaigns.js'));
app.use('/charities', require('./routes/charities.js'))

module.exports = app;