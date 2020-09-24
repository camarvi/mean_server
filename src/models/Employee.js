const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: true
})

//Creo un modelo Employee a través del Esquema creado y lo pongo como exportable

module.exports = model("Employee", employeeSchema);