// get numbers greater than 50. 

let numbers = [10, 21, 32, 43, 54];

let result = numbers.filter(function(number){
    return number > 50;
});

console.log(result); // looks if there is only one number then filter return a array 