const Comment = require('../models/Comment.model');

module.exports.commentController = {
    addComment: (req, res) => {
        Comment.create({
            text: req.body.text,
            author: req.body.author,
            post:req.body.post,
        }).then((data) => {
            res.json(data)
        })
    },
         getCommetnByTwitter: async (req, res) => {
           try {
            const data = await Comment.find({post: req.params.id}).populate("post")
           return res.json(data)
           } catch (err) {
            return res.json(err)
           }
         },
         getComments: (req, res) => {
            Comment.find().then((data) => {
                res.json(data)
            })
         },
    }