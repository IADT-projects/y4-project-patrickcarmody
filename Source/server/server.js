const app = require('./app');
const functions = require("firebase-functions");
const port = 3005;

// for local
app.listen(port, () =>  {
    console.log(`Listening on port ${port}`);
})
// for firebase
// exports.api = functions.https.onRequest(app);