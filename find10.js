// get the first employee whose salary is greater than 27000.

let employees = [
    { name: "Aman", salary: 18000 },
    { name: "Rohit", salary: 25000 },
    { name: "Neha", salary: 32000 },
    { name: "Karan", salary: 28000 }
];

let result = employees.find(function(employee){
    return employee.salary > 27000;
});

console.log(result)