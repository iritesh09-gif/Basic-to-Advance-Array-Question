// write a program that finds the first name whose length is greater than 5://

let names = ["Aman", "Rohit", "Priyanka", "Neha", "Karan"];

let result = names.find(function(name){
    return name.length>5
});

console.log(result);