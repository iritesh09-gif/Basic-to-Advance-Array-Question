// Find the first even number and print it.//

let numbers = [11, 23, 35, 42, 57, 68];

let result = numbers.find(function(number){
    return number % 2 === 0;
});

console.log(result);