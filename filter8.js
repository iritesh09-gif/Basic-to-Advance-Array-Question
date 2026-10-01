// If no number matches the condition, what will filter() return?

let numbers = [10, 20, 30];

let result = numbers.filter(function(number) {
    return number > 100;
});

console.log(result);