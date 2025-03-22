
const express = require('express');
const routes = require('./routes/rutas.js');

const app = express();
const PORT = 3000;

app.use('/api', routes);

app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
