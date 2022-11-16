
const Twitter = require('../models/Twitter.model');

module.exports.twitterContntroller = {
    addTwitter: (req, res) =>{
       Twitter.create({
           post: req.body.post,
           user: req.body.user,
           likes:req.body.likes
       }).then((data) => {
        res.json(data)
       })
    },
    getTwitter: (req, res) => {
        Twitter.find()
        .then((data) => {
            res.json(data)
        })
    },
    addLikesByTwitter: (req, res) => {
        Twitter.findByIdAndUpdate(
            {_id: req.params.id},
            {$push:{likes: req.body.likes}},
            {new:true}      
        ).then((data) => {
            res.json(data)
        })
    }
}