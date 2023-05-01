const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_ATLAS_URL, {
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

const disconnect = async () => {
    await db.close();
}

module.exports = { connect, disconnect };