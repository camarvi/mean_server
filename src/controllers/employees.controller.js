const employeeCtrl = {};

employeeCtrl.getEmployees = (req, res) => {
    res.send('get Employees');
};
employeeCtrl.createEmployee = (req, res) => {
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