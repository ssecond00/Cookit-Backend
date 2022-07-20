var express = require('express')
var router = express.Router()
var ImageController = require('../../controllers/imageController')

router.post('/uploadImage', ImageController.uploadImage);

router.post('/guardarImgUser',ImageController.guardarImagenUser)


// Export the Router
module.exports = router;
