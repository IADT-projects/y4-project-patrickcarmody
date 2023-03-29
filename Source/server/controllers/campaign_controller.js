const Campaign = require('../models/campaign_schema');

const readData = (req, res) => {
    Campaign.find()
        .then((data) => {
            console.log(`User got all campaigns`);
            if(data.length > 0) {
                res.status(200).json(data);
            }
            else{
                res.status(404).json("None found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
};

const searchData = (req, res) => {
    const query = req.query.title;
    Campaign.find({ title: new RegExp(query, 'i')})
        .then((data) => {
            console.log(`User searched for campaigns with title: ${query}`);
            if (data.length > 0) {
                res.status(200).json(data);
            } else {
                res.status(404).json("None found");
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
}

const filterByCategory = (req, res) => {
    const query = req.query;
    Campaign.find(query)
      .then((data) => {
        console.log(`User searched for campaigns with query: ${JSON.stringify(query)}`);
        if (data.length > 0) {
          res.status(200).json(data);
        } else {
          res.status(404).json("None found");
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }

const readSingle = (req, res) => {
    let id = req.params.id;

    Campaign.findById(id)
        .then((data) => {
            if(data) {
                res.status(200).json(data);
                console.log(`User got campaign with ID ${id}`)
            }
            else {
                res.status(404).json({
                    "message": `campaign with id: ${id} not found`
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

const createData = (req, res) => {
    let campaignData = req.body;
    Campaign.create(campaignData)
        .then((data) => {
            console.log(`Fundraiser Created: ${data._id}`)
            res.status(201).json(data);
        })
        .catch((err) => {
            console.error("Error Message: " + err.message);
                res.status(500).json(err);
        });
};

const editData = (req, res) => {
    let id = req.params.id;
    let body = req.body;

    Campaign.findByIdAndUpdate(id, body, {
        new: true
    })
        .then((data) => {
            if(data) {
                console.log(`User edited campaign ${id}`)
                res.status(200).json(data);
            }
            else {
                res.status(404).json({
                    "message": `campaign with id: ${id} not found`
                });
            }
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

    Campaign.deleteOne({ _id: id })
        .then((data) => {
            if(data.deletedCount){
                console.log(`User deleted campaign with ID ${id}`);
                res.status(200).json({
                    "message": `campaign with ID ${id} deleted`
                });
            }
            else {
                res.status(404).json({
                    "msg": `campaign with ID ${id} not found`
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
    deleteData,
    searchData,
    filterByCategory
}