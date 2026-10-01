// Use find() to find the first number greater than 40.//

let numbers = [10, 23, 35, 42, 51, 68];

let result = numbers.find(function(number){
    return number>40
});

console.log(result)