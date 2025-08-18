function printEmployees(employees) {
    employees.forEach(function (emp) {
        console.log("ID: ".concat(emp.empId, ", Name: ").concat(emp.empName, ", Salary: ").concat(emp.salary));
    });
    return employees.length;
}
var employeeList = [
    { empId: 101, empName: "Abdul", salary: 50000 },
    { empId: 102, empName: "Rahman", salary: 55000 },
    { empId: 103, empName: "John", salary: 60000 }
];
var count = printEmployees(employeeList);
console.log("Total Employees: ".concat(count));
