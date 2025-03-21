const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


// Middleware para parsear JSON
router.use(express.json());

//Ruta inicial
router.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta para obtener todos los usuarios
router.get('/usuarios', (req, res) => {
  const dbPath = path.join(__dirname,'..' ,'db', 'db.json');
  
  fs.readFile(dbPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
    
    try {
      const usuarios = JSON.parse(data);
      res.json(usuarios);
    } catch (parseError) {
      console.error('Error al parsear JSON:', parseError);
      res.status(500).json({ mensaje: 'Error al procesar datos de usuarios' });
    }
  });
});

/*router.post('/crearUsuarios', async (req, res) => {
  const dbPath = path.join(__dirname, '..', 'db', 'db.json');
  
  try {
    // Leer el archivo existente
    const data = await fs.readFile(dbPath, 'utf8');
    let { usuarios } = JSON.parse(data);

    // Crear nuevo usuario
    const nuevoUsuario = {
      id: usuarios.length + 1, // Asignar un nuevo ID
      ...req.body // Spread operator para incluir todos los datos enviados
    };

    // Añadir el nuevo usuario al array
    usuarios.push(nuevoUsuario);

    // Escribir los datos actualizados en el archivo
    await fs.writeFile(dbPath, JSON.stringify({ usuarios }, null, 2));

    // Responder con el nuevo usuario creado
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear usuario' });
  }
});*/



module.exports = router;

