// Use map() with a ternary operator://

let  numbers = [10, 25, 40, 55, 70];
 
let result = numbers.map(function(number){
    return number>40? number*2 : number+5;
})

console.log(result)