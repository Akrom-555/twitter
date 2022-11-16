const {Router} = require('express');
const { userControllers } = require('../controllers/users.controllers');
const router = Router()

router.post('/users', userControllers.addUser);
router.patch('/users/:id', userControllers.saveTwitt)

module.exports = router