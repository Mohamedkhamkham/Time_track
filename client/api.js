import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Obtener todos los usuarios
export const obtenerUsuarios = async () => {
  const response = await axios.get(`${API_URL}/usuarios`);
  return response.data;
};


