const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup :{
        type: String
    },
    punchLine :{
        type: String
    }
},{timestamps: true})

//Option 1  
const Joke = mongoose.model('Joke', JokeSchema) 
module.exports = Joke;

//Option 2
// module.exports = mongoose.model('Joke', JokeSchema)

