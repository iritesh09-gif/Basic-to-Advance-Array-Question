// create a new array where 10% GST is added to every price.//

let prices = [100, 250, 500, 750];

let result = prices.map(function(price){
    return price*10/100 + price ;  // here we return the actual prices after the gst 

})

console.log(result)