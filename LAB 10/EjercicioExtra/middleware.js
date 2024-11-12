const middleware = function(req, res, next) {
    console.log('Middleware activado: Accediendo a la página de Periféricos');
    setTimeout(() => {
        next();
    }, 5000); // 2 segundos de demora
};

module.exports = middleware;

