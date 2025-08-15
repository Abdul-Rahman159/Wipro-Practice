interface Employee {
    empId: number;
    empName: string;
    salary: number;
}

function printEmployees(employees: Employee[]): number {
    employees.forEach(emp => {
        console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
    });
    return employees.length;
}

const employeeList: Employee[] = [
    { empId: 101, empName: "Abdul", salary: 50000 },
    { empId: 102, empName: "Rahman", salary: 55000 },
    { empId: 103, empName: "John", salary: 60000 }
];

 
const count = printEmployees(employeeList);
console.log(`Total Employees: ${count}`);
