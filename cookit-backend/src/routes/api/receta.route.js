var express = require('express')
var router = express.Router()
var RecetaController = require('../../controllers/receta.controller')


router.get('/getRecetaById', RecetaController.getRecetaById);

// Export the Router
module.exports = router;