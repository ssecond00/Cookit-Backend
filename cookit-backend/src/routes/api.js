/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var recetas = require('./api/receta.route')
var imagenes = require('./api/image.route')

router.use('/users', users);

router.use('/recetas', recetas);

router.use('/images', imagenes);

module.exports = router;
