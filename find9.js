// Find the first name whose length is exactly 4 and print it.//

let names = ["Aman", "Rohit", "Priyanka", "Neha", "Karan"];

let result = names.find(function(name){
    return name.length === 4;
});

console.log(result);