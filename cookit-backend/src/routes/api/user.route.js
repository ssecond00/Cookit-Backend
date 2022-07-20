var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/user.controller');


router.get('/GetUserByid/:user_id', UserController.getUserById);

router.post('/CreateUser', UserController.createUser);

router.post('/updateUsername', UserController.updateUsername);

router.post('/updatePassword', UserController.updatePassword);

router.get('/getUserByUsername', UserController.getUserByUsername);

router.post('/GetUsuarioByLogin', UserController.getUsuarioByLogin);



// Export the Router
module.exports = router;

