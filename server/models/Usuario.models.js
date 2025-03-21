const mongoose = require('mongoose');

// Definimos el esquema del usuario
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
});

// Creamos el modelo basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
