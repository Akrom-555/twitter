const {Router} = require('express');
const { model } = require('mongoose');
const { twitterContntroller } = require('../controllers/twitter.controllers');
const router = Router();

router.post('/twitter' , twitterContntroller.addTwitter);
router.get('/twitter', twitterContntroller.getTwitter);
router.patch('/twitter/:id', twitterContntroller.addLikesByTwitter);




module.exports = router