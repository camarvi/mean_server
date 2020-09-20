const { Router } = require('express');

const router = Router();

const employeesCtrl = require('../controllers/employees.controller.js');

//  get a  /api/employees
router.get('/', employeesCtrl.getEmployees);
//  post a  /api/employees
router.post('/', employeesCtrl.createEmployee);

//  get a  /api/employees/:id
router.get('/:id', employeesCtrl.getEmployee);

//  put a  /api/employees/:id (para actualizar)
router.put('/:id', employeesCtrl.editEmployee);

//  delete a  /api/employees/:id (para actualizar)
router.delete('/:id', employeesCtrl.deleteEmployee);

module.exports = router;