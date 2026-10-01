// map() ka use karke sirf product prices aur product name  ka new array banao.//

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
    return(product.name+"-" +product.price)
            
    
});

console.log(result)