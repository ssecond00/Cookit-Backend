var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/user.controller');


router.get('/GetUserByMail', UserController.getUserByMail);

router.put('/UpdateUsername', UserController.UpdateUsername);

router.put('/UpdatePassword', UserController.UpdatePassword);

router.post('/CreateUser', UserController.CreateUser);



// Export the Router
module.exports = router;

