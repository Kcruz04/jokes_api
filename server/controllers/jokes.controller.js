const Joke = require('../models/jokes.model')

//Create Function
module.exports.createJoke = (req, res) =>{
    const newJoke = req.body
    Joke.create(newJoke)
    .then(joke => res.json({results: joke})
    )
    .catch((err) => consres.json(err))
}

//Read all
module.exports.allJokes = (req, res) => {
    Joke.find()
    .then((allJokes) => res.json({results: allJokes}))
    .catch((err) => res.json(err));
}

//Read one
module.exports.oneJoke = (req, res) => {
    const idFromParams = req.params.id;
    Joke.findOne({_id: idFromParams})
    .then((oneJoke) => res.json({results: oneJoke}))
    .catch((err) => res.json(err))
}

// Update
module.exports.updateJoke = (req,res) => {
    const idFromParams = req.params.id;
    const updateJoke = req.body;
    Joke.findOneAndUpdate({_id: idFromParams}, updateJoke, {new: true})
    .then((updatedJoke) => res.json({results: updatedJoke}))
    .catch((err) => res.json(err))
}

//Delete
module.exports.deleteJoke = (req,res) => {
    const idFromParams = req.params.id;
    Joke.deleteOne({_id: idFromParams})
    .then((deletedJoke) => res.json({results: deletedJoke}))
    .catch((err) => res.json(err))
}