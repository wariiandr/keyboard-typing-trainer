const { Schema, model } = require('mongoose');

const Game = new Schema({
    score: {
        type: String,
        required: true
    }
})

module.exports = model('Game', Game);