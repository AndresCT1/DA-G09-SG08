var http = require('http');

var server = http.createServer();

function mensaje(peticion, respuesta) {
    respuesta.writeHead(200, { 'Content-Type': 'text/plain' });
    respuesta.write('Bienvenido a Arequipa, ciudad de encantadores lugares turísticos.\n\n');
    respuesta.write('1. Monasterio de Santa Catalina: Un impresionante convento de la época colonial con calles de vivos colores y una arquitectura única.\n');
    respuesta.write('2. Plaza de Armas: El corazón de la ciudad, rodeada de bellos arcos coloniales y la majestuosa Catedral de Arequipa.\n');
    respuesta.write('3. Cañón del Colca: Uno de los cañones más profundos del mundo, ideal para disfrutar de paisajes espectaculares y avistar cóndores.\n');
    respuesta.write('4. Mirador de Yanahuara: Un lugar perfecto para disfrutar de vistas panorámicas de la ciudad y del volcán Misti.\n');
    respuesta.write('5. Valle de los Volcanes: Una región llena de formaciones volcánicas, perfecta para el turismo de aventura y el contacto con la naturaleza.\n');
    respuesta.write('6. Molino de Sabandía: Un antiguo molino colonial rodeado de naturaleza, ideal para disfrutar de la tranquilidad y aprender sobre la historia de Arequipa.\n');
    respuesta.end();
}

server.on('request', mensaje);

server.listen(3000, function() {
    console.log('La aplicación está funcionando en el puerto 3000');
});
