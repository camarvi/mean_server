// Utilizar referencia Express
const express = require('express');

// Referenciar morgan
const morgan = require('morgan');

//Inicializar express
const app = express();

app.set('port', 4000);

app.use(morgan('dev'));

module.exports = app;