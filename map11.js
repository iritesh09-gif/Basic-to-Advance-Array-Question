/*Use map() with if/else:

If the number is greater than 40, multiply it by 2.
Otherwise, add 5 to it.
Store the result in result.
Print result.*/

let numbers = [10, 20, 35, 50, 65, 80];

let result = numbers.map(function(number){
    if (number>40)  {
        return number*2;

    }else{
        return number+5;
    }
});

console.log(result);