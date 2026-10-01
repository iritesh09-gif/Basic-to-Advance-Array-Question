// what happens when there is no match.//

let numbers = [11, 23, 35, 47, 59];

let result = numbers.find(function(number){
    return number >100 ;
})

console.log(result);