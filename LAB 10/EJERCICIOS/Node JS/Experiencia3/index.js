var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    if (req.url === '/') {
        // Servir el archivo HTML principal
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(fs.readFileSync('./index.html'));
        res.end();
    } else if (req.url === '/estilos.css') {
        // Servir el archivo CSS
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(fs.readFileSync('./estilos.css'));
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('404 Not Found');
        res.end();
    }
}).listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});

