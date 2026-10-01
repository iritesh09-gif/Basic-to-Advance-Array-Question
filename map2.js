// create a new array where each name is converted to uppercase.//

let names = ["aman", "rohit", "priya", "neha"];

let result = names.map(function(name){
    return name.toUpperCase() // here we use touppercase for make all names in Uppercase
  
});   

console.log(result);