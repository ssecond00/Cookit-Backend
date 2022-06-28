//Express
var express = require('express');

//instancio el servidor
var app = express();


var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bluebird = require('bluebird');
var fs = require('fs');

//incorporo cors
var cors = require('cors');

//importo router
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api'); //Custom
var utilRouter = require('./routes/utils');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//aplico cors
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Indico las rutas de los endpoint
app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/utils/', utilRouter);

//onsole.log("processENV",process.env);
if (process.env.NODE_ENV === 'Development') {
    require('./config').config();
}

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// Setup server port
var port = 4000;
// Escuchar en el puerto
app.listen(port, () => {
    console.log('Servidor iniciado en el puerto', port);
});

module.exports = app;