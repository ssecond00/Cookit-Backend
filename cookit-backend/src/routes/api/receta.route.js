var express = require('express')
var router = express.Router()
var RecetaController = require('../../controllers/receta.controller')


router.post('/getRecetaById', RecetaController.getRecetaById);

router.get('/getAllRecetas', RecetaController.getAllRecetas);

router.post('/getRecetasByCriteria', RecetaController.getRecetasByCriteria);

// Export the Router
module.exports = router;