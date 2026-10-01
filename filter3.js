// Use filter() to get all names whose length is greater than 4.//

let names = ["Aman", "Rohit", "Priyanka", "Neha", "Karan", "Vivek"];

let result = names.filter(function(name){

    return name.length > 4;
});

console.log(result)