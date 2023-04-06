const User = require('../models/user_schema');

const register = async (req, res) => {
    try {
        let newUser = new User(req.body);
        let savedUser = await newUser.save();
        console.log("New user created: " + savedUser);
        return res.status(201).json(savedUser);
      } catch (error) {
        return res.status(400).json({ msg: error.message });
      }
    };

const readData = (req, res) => {
    let query = {};
    // check if user included search params
    if (Object.keys(req.query).length > 0) {
        for (const [property, term] of Object.entries(req.query)) {
        query[property] = new RegExp(term, 'i');
        }
    }
    User.find(query)
        .then((data) => {
        if (Object.keys(query).length > 0) {
            console.log(`User searched for user with ${Object.keys(query).join(', ')}: ${Object.values(query).join(', ')}`);
        } else {
            console.log(`User retrieved all users`);
        }
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json("None found");
        }
        })
        .catch((err) => {
        console.error(err);
        res.status(500).json(err);
        });
}

const readSingle = (req, res) => {
    let id = req.params.id;

    User.findById(id)
        .then((data) => {
            if(data) {
                res.status(200).json(data);
                console.log(`User got user with ID ${id}`)
            }
            else {
                res.status(404).json({
                    "message": `user with id: ${id} not found`
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
};

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
    register,
    readData,
    readSingle,
    deleteUser,
    editUser
};