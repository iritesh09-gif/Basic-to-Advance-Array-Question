// Use filter() to get all even numbers.//

let numbers = [10,15,22,31,44,57,68]

let result = numbers.filter(function(number){
    return number % 2 ===0
});

console.log(result)