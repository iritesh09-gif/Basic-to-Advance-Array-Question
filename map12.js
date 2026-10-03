/*If price >= 2000, increase the price by 10%.
Otherwise, increase the price by 5%.
Return a new object containing the original name and the new price.*/

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
    if(product.price>=2000){
        return{
            name: product.name,
            price: product.price+ product.price*10/100
        } 
    }else{
      return{
            name: product.name,
            price:product.price+ product.price*5/100
        } 
    } 
});

console.log(result)