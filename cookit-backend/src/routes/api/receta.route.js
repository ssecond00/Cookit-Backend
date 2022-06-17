var express = require('express')
var router = express.Router()
var RecetaController = require('../../controllers/receta.controller')


router.get('/getRecetaById', RecetaController.getRecetaById);

router.get('/getAllRecetas', RecetaController.getAllRecetas);

// Export the Router
module.exports = router;