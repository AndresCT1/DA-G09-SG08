// Solicitando paquete de Mysql
var mysql = require('mysql');

// Configurando parámetros de conexión (puede variar según instalación)
var conexion = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    database: 'bd_sistema_ventas',
    user: 'root',
    password: 'catolica',
});

// Realizando conexión o verificando si sucedió un error
conexion.connect(function(err) {
    if (err) {
        console.log("Error de conexion" + err.stack);
        return;
    }
    console.log("Conectado al ID " + conexion.threadId);
});

// Mostrar todos los productos de la BD en formato de tabla
conexion.query('SELECT * FROM tb_producto', function(error, results) {
    if (error) throw error;
    console.table(results); // Muestra los resultados en formato de tabla
});

conexion.end();
