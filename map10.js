// discount price ke sath new array return krna map ka use krke//


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
    return {
        name:product.name,
        price: product.price,
        discountedPrice: product.price-(product.price*10/100)
    }
});

console.log(result)
