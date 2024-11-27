// Importando paquetes y archivos necesarios para trabajar las rutas
var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();
// Configurando el Parser
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(function (req, res, next) {
 console.log("request");
 next();
});
// Metodos para manejar Base de Datos mongoDB llamada node-crud
router.route('/products')
    .post(async function (req, res) {
        try {
            const product = new Product(req.body); // Crea un nuevo producto con los datos del cuerpo de la solicitud
            const savedProduct = await product.save(); // Guarda el producto y espera la resolución del Promise
            res.status(201).json(savedProduct); // Envía el producto guardado como respuesta con código 201 (Creado)
        } catch (error) {
            res.status(500).send("Error al guardar el producto: " + error); // Maneja errores
        }   
    })
    .get(async function (req, res) {
        try {
            const products = await Product.find(); // Espera la resolución del Promise
            res.json(products); // Envía los productos como respuesta
        } catch (error) {
            res.status(500).send("Error en el servicio: " + error);
        }
    });

router.route('/products/:id')
    .put(async function (req, res) {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id, // ID del producto en la URL
                req.body, // Datos para actualizar
                { new: true } // Devuelve el documento actualizado
            );
            if (!updatedProduct) {
                return res.status(404).send("Producto no encontrado");
            }
            res.json(updatedProduct); // Envía el producto actualizado
        } catch (error) {
            res.status(500).send("Error al actualizar el producto: " + error);
        }
    })

    // Ruta para eliminar un producto por su ID (DELETE)
    .delete(async function (req, res) {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id); // Elimina el producto
            if (!deletedProduct) {
                return res.status(404).send("Producto no encontrado");
            }
            res.json({ message: "Producto eliminado exitosamente" }); // Confirmación de eliminación
        } catch (error) {
            res.status(500).send("Error al eliminar el producto: " + error);
        }
    });

   module.exports = router;