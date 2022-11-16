const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    text: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitter'
    }
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;