const Charity = require('../models/charity_schema');

const readData = (req, res) => {
    let query = {};
    let limit = parseInt(req.query.limit) || 0;
    if (Object.keys(req.query).length > 0) {
      for (const [property, term] of Object.entries(req.query)) {
        if (property !== 'limit' && property !== 'sort') {
          query[property] = new RegExp(term, 'i');
        }
      }
    }
    let sort = {};
    if (req.query.sort === 'new') {
        sort.createdAt = -1;
    } else if (req.query.sort === 'old') {
        sort.createdAt = 1;
    }

    Charity.find(query).limit(limit).sort(sort)
    .then((data) => {
    if (Object.keys(query).length > 0) {
        console.log(`User searched for charities`);
    } else {
        console.log(`User retrieved all charities`);
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

    Charity.findById(id)
        .then((data) => {
            if(data) {
                res.status(200).json(data);
                console.log(`User requested charity ${id}`)
            }
            else {
                res.status(404).json({
                    "message": `charity with id: ${id} not found`
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
        })
}

const createData = (req, res) => {
    let charityData = req.body;
    Charity.create(charityData)
        .then((data) => {
            console.log(`Charity created: ${data._id}`)
            res.status(201).json(data);
        })
        .catch((err) => {
            console.error(err.message);
            res.status(500).json(err);
        });
}

const editData = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Charity.findByIdAndUpdate(id, body, {
        new: true
    })
        .then((data) => {
            console.log(`User edited charity ${id}`)
            res.status(200).json(data);
        })
        .catch((err) => {
            if(err.name === 'ValidationError') {
                console.error('Validation Error: ', err);
                res.status(422).json({
                    "msg": "Validation Error",
                    "error": err.message
                });
            }
            else if(err.name === 'CastError') {
                res.status(400).json({
                    "msg": `Bad request, ${id} is not a valid id`
                });
            }
            else {
                console.error(err);
                res.status(500).json(err);
            }
        });
}

const deleteData = (req, res) => {
    let id = req.params.id;

    Charity.deleteOne({ _id: id })
        .then((data) => {
            if(data.deletedCount) {
                console.log(`User deleted charity ${id}`);
                res.status(200).json({
                    "message": `Charity ${id} deleted`
                });
            }
            else {
                res.status(404).json({
                    "msg": `charity with ID ${id} not found`
                });
            }
        })
        .catch((err) => {
            console.error(err);
            if(err.name === 'CastError') {
                res.status(400).json({
                    "message": `Bad request, ${id} is not valid`
                });
            }
            else {
                res.status(500).json(err)
            }
        });
}

module.exports = {
    readData,
    readSingle,
    createData,
    editData,
    deleteData
}