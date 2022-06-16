/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()
var users = require('./api/user.route')
var recetas = require('./api/receta.route')

router.use('/users', users);

router.use('/recetas', recetas);

module.exports = router;
