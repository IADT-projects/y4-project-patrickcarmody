const express = require('express');
const app = express();
const port = 3005;

require('dotenv').config();
require('./utils/db.js')();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use('/api/users', require('./routes/users.js'));
app.use('/api/campaigns', require('./routes/campaigns.js'));

app.listen(port, () => {
    console.log(`App listening on port 3005`);
});