// Concept

// map() sirf values return nahi karta. Tum new object bhi return kar sakte ho.//


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
    return{
        name : product.name,                           // yha pr same object hi use kiye hai yha kuch aur bhi rkha ja skta hai
        price : product.price*10/100 +product.price,   // yha price ko 10% increase krne ke baad price likha gya hai//
    }
});

console.log(result);
    
