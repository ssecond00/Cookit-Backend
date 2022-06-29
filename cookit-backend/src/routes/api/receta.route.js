var express = require('express')
var router = express.Router()
var RecetaController = require('../../controllers/receta.controller')


router.get('/getAllRecetas', RecetaController.getAllRecetas);

router.get('/getRecetaById/:idReceta', RecetaController.getRecetaById);

router.get('/getRecetasByCategoria/:categoria_receta', RecetaController.getRecetasByCriteria);

router.get('/getRecetasByDificultad/:nivel_dificultad', RecetaController.getRecetaByDificultad);

router.get('/getRecetasByTitulo/:titulo_receta', RecetaController.getRecetaByTitulo);

router.get('/getRecetasFromUser/:username', RecetaController.getRecetasFromUser);

// Export the Router
module.exports = router;