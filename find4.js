// Write code to find the first even number from://

let numbers = [15, 27, 33, 41, 52, 64, 75];

let result = numbers.find(function(number){
     return number % 2 === 0 ;
});

console.log(result)