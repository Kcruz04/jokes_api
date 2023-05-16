const JokeController = require("../controllers/jokes.controller")

module.exports = (app) => {
    //Create
    app.post('/api/jokes/new', JokeController.createJoke)
//Read all
    app.get('/api/jokes', JokeController.allJokes)
// //Read One
    app.get('/api/jokes/:id', JokeController.oneJoke)
// //Update
    app.put('/api/jokes/update/:id', JokeController.updateJoke)
// //Delete
    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}