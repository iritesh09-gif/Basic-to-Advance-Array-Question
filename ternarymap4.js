/* ];

Use map() to return a new object containing:

name
salary
level

Rules:

salary >= 40000 → "Senior"
salary < 40000 → "Junior"  */


let employees = [
    { name: "Aman", salary: 25000 },
    { name: "Rohit", salary: 45000 },
    { name: "Priya", salary: 18000 },
    { name: "Neha", salary: 60000 }
];


let result = employees.map(function(employee){
    return {
        name: employee.name,
        salary: employee.salary,
        level: employee.salary>=40000? "Senior" : "Junior"   //  yha ternary ka use  kiya gya hai if/else ke jgh pr//
    };
});

console.log(result)
