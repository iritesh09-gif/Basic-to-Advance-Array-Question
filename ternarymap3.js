/* Return a new object containing:

name
price
discount

Rules:

If price >= 2000 → discount = 10% of price
Otherwise → discount = 5% of price  */


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 10000 }
];


let result = products.map(function(product){
    return {
        name : product.name,
        price : product.price,
        discount : product.price>=2000? product.price*10/100 : product.price*5/100
    }
});

console.log(result)