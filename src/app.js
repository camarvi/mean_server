// Utilizar referencia Express
const express = require('express');

// Referenciar morgan
const morgan = require('morgan');

//Inicializar express
const app = express();

// environment variables
app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));

//Aceptar json
app.use(express.json());

//Aceptar informacion que venda de un formulario html
app.use(express.urlencoded({ extended: false }));

app.use("/api/employees", require('./routes/employees.routes'));

module.exports = app;