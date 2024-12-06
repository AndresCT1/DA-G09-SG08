const express = require('express');
const admin = require('firebase-admin');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

// Inicializar Firebase
const serviceAccount = require('./firebase-config.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "ejercicio1-86965.firebasestorage.app",
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

const app = express();
const upload = multer({ dest: 'uploads/' }); // Carpeta temporal para almacenamiento

// Middleware
app.use(express.json());

// Crear documento en Firestore
app.post('/crear', async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection('coleccionEjemplo').add(data);
    res.status(201).json({ id: docRef.id, message: 'Documento creado exitosamente.' });
  } catch (error) {
    console.error(error); // Log para depuración
    res.status(500).json({ error: 'Ocurrió un error al crear el documento.' });
  }
});

// Leer documentos de Firestore
app.get('/colecciones', async (req, res) => {
  try {
    const snapshot = await db.collection('coleccionEjemplo').get();
    const documentos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(documentos);
  } catch (error) {
    console.error(error); // Log para depuración
    res.status(500).json({ error: 'Ocurrió un error al obtener las colecciones.' });
  }
});

// Subir archivo a Firebase Storage
app.post('/subir', upload.single('archivo'), async (req, res) => {
  try {
    const archivo = req.file;
    if (!archivo) {
      return res.status(400).json({ error: "No se recibió ningún archivo." });
    }

    const destino = `documentos/${uuidv4()}_${archivo.originalname}`;
    console.log("Destino del archivo:", destino);

    await bucket.upload(archivo.path, { destination: destino });
    console.log("Archivo subido al bucket.");
    
    const archivoUrl = `https://storage.googleapis.com/${bucket.name}/${destino}`;
    res.status(200).json({ url: archivoUrl, message: 'Archivo subido exitosamente.' });
  } catch (error) {
    console.error("Error al subir archivo:", error.message);
    res.status(500).json({ error: "Ocurrió un error al subir el archivo." });
  }
});


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});