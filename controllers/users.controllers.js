const User = require('../models/User.model');

module.exports.userControllers = {
    addUser: (req, res) => {
        User.create({
            name: req.body.name,
            saves:req.body.saves
        }).then((data) => {
            res.json(data)
        })
    },
    saveTwitt: (req, res) => {
        User.findByIdAndUpdate(
            {_id: req.params.id},
            {$push:{saves: req.body.saves}},
            {new:true}    
        ).then((data) => {
            res.json(data)
        })
    }
}