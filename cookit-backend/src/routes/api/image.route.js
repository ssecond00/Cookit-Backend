var express = require('express')
var router = express.Router()
var ImageController = require('../../controllers/imageController')

router.post('/uploadImage', ImageController.uploadImage);

// Export the Router
module.exports = router;
