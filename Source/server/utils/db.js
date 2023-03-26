const mongoose = require('mongoose');

const connect = async () => {
    let db = null;

    try {
        await mongoose.connect(process.env.DB_ATLAS_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });

        console.log("Connected to database")
        db = mongoose.connection;
    }
    catch(error) {
        console.log(error); 
    }
};

module.exports = connect;