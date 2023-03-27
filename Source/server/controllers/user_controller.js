const User = require('../models/user_schema');

const testFunction = (req, res) => {
    // let newUser = new User(req.body);
    console.log(req.body);
    console.log("Request details: ", req.body);
    res.status(200).json({
        msg: "Ok"
    })
};

const register = async (req, res) => {
    console.log(req.body)
};

const readUsers = (req, res) => {
    User.find()
        .then((data) => {
            // console.log(data);
            if(data.length > 0){
                res.status(200).json(data);
                console.log("Got all users")
            }
            else{
                res.status(404).json("None found");
                console.log("Got all users, but none found.")
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
};

const readUser = (req, res) => {
    let id = req.params.id;

    User.findById(id)
        .then((data) => {
            if(data) {
                res.status(200).json(data);
            }
            else {
                res.status(404).json({
                    "message": `User with id: ${id} not found`
                });
            }
        })
        .catch((err) => {
            console.error(err);
            if(err.name === 'CastError') {
                res.status(400).json({
                    "message": `Bad request, ${id} is not a valid id`
                });
            }
            else {
                res.status(500).json(err)
            }
        });
}

const deleteUser = (req, res) => {
    let id = req.params.id;

    User.deleteOne({ _id: id })
        .then((data) => {
            if(data.deletedCount){
                console.log(`User with ID: ${id} was deleted`);
                res.status(200).json({
                    "message": `User with ID: ${id} was deleted`
                });
            }
            else {
                res.status(404).json({
                    "error": `User with ID: ${id} not found`
                });
            }
        })
        .catch((err) => {
            console.error(err);
            if(err.name === 'CastError') {
                res.status(400).json({
                    "error": `Bad request, ${id} is not a valid ID`
                });
            }
            else{
                res.status(500).json(err)
            }
        });
};

const editUser = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    User.findByIdAndUpdate(id, body, {
        new: true
    })
        .then((data) => {
            if(data){
                res.status(201).json(data);
                console.log(`User with ID: ${id} was updated`)
            }
            else {
                res.status(404).json({
                    "error": `User ${id} not found`
                });
            }
        })
}

module.exports = {
    testFunction,
    register,
    readUsers,
    readUser,
    deleteUser,
    editUser
};