var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/user.controller');


router.get('/GetUserByid/:user_id', UserController.getUserById);

router.post('/CreateUser', UserController.createUser);

router.put('/updateUsername', UserController.updateUsername);

router.get('/getUserByUsername', UserController.getUserByUsername);

router.post('/GetUsuarioByLogin', UserController.getUsuarioByLogin);



// Export the Router
module.exports = router;

