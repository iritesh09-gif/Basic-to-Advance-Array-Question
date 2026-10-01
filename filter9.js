//get all products with a price between 1,000 and 30,000 inclusive.//

let products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Monitor", price: 12000 },
    { name: "Keyboard", price: 1500 },
    { name: "Phone", price: 30000 }
];


let result = products.filter(function(product){
    return product.price >= 1000 && product.price <=30000;
});

console.log(result)