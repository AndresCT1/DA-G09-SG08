var express = require('express');
var rutas = express.Router();

// Ruta de bienvenida
rutas.get('/', function(req, res) {
    res.send('Hola mundo desde Express');
});

// Ruta de la página de inicio
rutas.get('/home', function(req, res) {
    res.render('home');
});

// Ruta para la página de periféricos (con middleware aplicado en index.js)
rutas.get('/perifericos', function(req, res) {
    res.render('perifericos');
});

rutas.get('/componentes', function(req, res) {
    res.render('componentes');
});

rutas.get('/computadoras', function(req, res) {
    res.render('computadoras');
});
module.exports = rutas;

