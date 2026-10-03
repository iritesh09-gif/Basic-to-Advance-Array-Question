//Use map() and the ternary operator to create a new array of objects containing://

let students = [
    { name: "Aman", marks: 85 },
    { name: "Rohit", marks: 32 },
    { name: "Priya", marks: 67 },
    { name: "Neha", marks: 25 }
];


let result = students.map(function(student){
    return {
        name:student.name,
        marks: student.marks,
        result : student.marks>=40? "Pass" : "Fail"

    }
});

console.log(result)
