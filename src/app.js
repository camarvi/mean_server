// Utilizar referencia Express
const express = require('express');

// Referenciar morgan
const morgan = require('morgan');

//Inicializar express
const app = express();

// environment variables
app.set('port', 4000);

app.use(morgan('dev'));

app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;