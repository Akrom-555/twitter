const { commentController } = require("../controllers/comments.controllers");

const {Router} = require('express')

const router = Router();

router.post('/comment', commentController.addComment);
router.get('/comment/twitter/:id', commentController.getCommetnByTwitter);
router.get('/comment', commentController.getComments)

module.exports = router