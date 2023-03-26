const express = require('express');
// const jwt = require('jsonwebtoken');
const app = express();
const port = 3005;

require('dotenv').config();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.listen(port, () => {
    console.log(`App listening on port 3005`);
});