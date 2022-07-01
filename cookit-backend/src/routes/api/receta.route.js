var express = require('express')
var router = express.Router()
var RecetaController = require('../../controllers/receta.controller')


router.get('/getAllRecetas', RecetaController.getAllRecetas);

router.get('/getRecetaById/:idReceta', RecetaController.getRecetaById);

router.get('/getRecetasByCategoria/:categoria_receta', RecetaController.getRecetasByCriteria);

router.get('/getRecetasByDificultad/:nivel_dificultad', RecetaController.getRecetaByDificultad);

router.get('/getRecetasByTitulo/:titulo_receta', RecetaController.getRecetaByTitulo);

router.get('/getRecetasFromUser/:username', RecetaController.getRecetasFromUser);

router.post('/createReceta', RecetaController.createReceta);

router.post('/addIngrediente', RecetaController.addIng);

router.get('/getIngredientesByReceta/:receta_id', RecetaController.getIngredientesFromReceta);

router.get('/getRecetasByIngrediente/:ingrediente', RecetaController.getRecetasByIngrediente);

router.delete('/deleteRecetaById/:receta_id', RecetaController.deleteRecetaById);

router.post('/addValoraciontoReceta', RecetaController.addValoraciontoReceta);

router.get('/getValoracionesRecetaById/:receta_id', RecetaController.getValoracionesRecetaById);

router.post('/updateReceta', RecetaController.updateReceta);


// Export the Router
module.exports = router;