// map() ka use karke har product ke liye ye format return karo://

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
   
    return product.name +  " costs " +product.price;
});

console.log(result)