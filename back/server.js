// Declaración de constantes
const express 	= require('express');
const server 	= express();
const rutas		= require('./rutas');
const cors = require('cors');

// Establecimiento de middleware del servidor
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));

// Establecer el puerto del servidor
server.set('port', process.env.PORT || 3000);

// Rutas
server.use('/api', rutas);

module.exports = server;