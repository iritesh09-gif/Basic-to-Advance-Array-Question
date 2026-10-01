// get all products whose price is greater than 2000.//

let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "USB Cable", price: 400 }
];


let result = products.filter(function(product){
    return product.price > 2000;
});

console.log(result);