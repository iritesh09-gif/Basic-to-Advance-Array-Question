// Use filter() to get all prices between 500 and 1300, inclusive.//

let prices = [250, 800, 1200, 450, 1500, 300];

let result = prices.filter(function(price){
    return price >= 500  && price<=1300;
});

console.log(result)