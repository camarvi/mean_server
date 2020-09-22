const mongoose = require('mongoose');

//Establecer la conexión a la BD, sino esta creada
//mongoose se encarga de crearla por nosotros

mongoose.connect('mongodb://Localhost/mean-employees', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(db => console.log("DB Connected"))
    .catch(err => console.log(err));