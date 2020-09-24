const employeeCtrl = {};

// Referencia el modelo de datos
const Employee = require('../models/Employee');

employeeCtrl.getEmployees = async(req, res) => {
    // Obtener todos los Empleados
    const listaEmpleadaos = await Employee.find(); //Es un metodo asincrono
    res.json(listaEmpleadaos);
};
employeeCtrl.createEmployee = (req, res) => {
    console.log(req.body);
    res.send('create Employee');
};
employeeCtrl.getEmployee = (req, res) => {
    res.send('get one Employee');
};
employeeCtrl.editEmployee = (req, res) => {
    res.send('edit Employee');
};
employeeCtrl.deleteEmployee = (req, res) => {
    res.send('delete Employee');
};

module.exports = employeeCtrl;