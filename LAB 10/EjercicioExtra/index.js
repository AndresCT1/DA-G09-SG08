var express = require('express');
var path = require('path');
var appRutas = express();
var rutas = require('./rutas.js');
var middleware = require('./middleware.js');


// Configurar EJS como motor de plantillas
appRutas.set('view engine', 'ejs');
appRutas.set('views', path.join(__dirname, 'html'));

// Servir archivos estáticos
appRutas.use(express.static(path.join(__dirname, 'public')));

// Aplicar el middleware solo para la ruta de periféricos
appRutas.use('/perifericos', middleware);

// Configurar las rutas
appRutas.use('/', rutas);

appRutas.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});