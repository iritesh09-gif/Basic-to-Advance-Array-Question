// get all students who scored 60 or more.//

let students = [
    { name: "Aman", marks: 72 },
    { name: "Rohit", marks: 45 },
    { name: "Priyanka", marks: 88 },
    { name: "Neha", marks: 35 },
    { name: "Karan", marks: 67 }
];

let result = students.filter(function(student){
    return student.marks >= 60;
});

console.log(result)