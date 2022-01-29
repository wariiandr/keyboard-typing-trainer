const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    game_ids: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Game'
    }]
})

module.exports = model('User', User);