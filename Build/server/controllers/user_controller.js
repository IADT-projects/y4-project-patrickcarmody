const User = require('../models/user_schema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
      let newUser = new User(req.body);
      newUser.password = bcrypt.hashSync(req.body.password, 9);
      const user = await newUser.save();
      console.log("New user created");
      user.password = undefined;
      return res.status(201).json(user);
    } catch (err) {
      if (err.code === 11000) {
        return res.status(400).json({
          msg: err,
          error: "Email is already in use"
        })
      } else {
        return res.status(400).json({
          msg: err
        })
      }
    }
  };

  const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      user.password = undefined;
      if (!user || !user.comparePassword(req.body.password)) {
        res.status(401).json({
          msg: "Invalid email or password",
        });
      } else {
        console.log(`User with ID ${user._id} logged in`);
        const token = jwt.sign(
          {
            email: user.email,
            name: user.name,
            _id: user._id,
          },
          process.env.APP_KEY,
        );
        res.status(200).json({
          msg: "Login Successful",
          token,
          user: user
        });
      }
    } catch (err) {
        console.log(err)
      res.status(500).json({ msg: err });
    }
  };
  

const readData = (req, res) => {
    let query = {};
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

const editUser = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      if (body.password) {
        body.password = bcrypt.hashSync(body.password, 9);
      }
      const user = await User.findByIdAndUpdate(id, body, { new: true });
      if (user) {
        user.password = undefined;
        console.log(`User with ID: ${id} was updated`);
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: `User ${id} not found` });
      }
    } catch (err) {
      console.error(err);
      if (err.name === "CastError") {
        res
          .status(400)
          .json({ error: `Bad request, ${id} is not a valid ID` });
      } else {
        res.status(500).json(err);
      }
    }
  };

module.exports = {
    register,
    readData,
    readSingle,
    deleteUser,
    editUser,
    login
};