// Get all numbers greater than 40.//

let numbers = [12, 25, 38, 41, 56, 63, 72];

let result = numbers.filter(function(number){
    return number>40;
});

console.log(result)