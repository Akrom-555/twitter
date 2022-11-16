const mongoose = require('mongoose');

const twitterSсhema = mongoose.Schema({
    post: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]
})

const Twitter = mongoose.model('Twitter', twitterSсhema )

module.exports = Twitter