// create a new array containing only the product names.//


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];


let result = products.map(function(product){
    return product.name;
});

console.log(result)