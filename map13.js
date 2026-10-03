/*let names = ["aman", "rohit", "priya", "neha"];

let result = names.map(function(name){
     return name.toUpperCase();
})
console.log(result)  */

/*
let prices = [100, 250, 500, 1000];

let result= prices.map(function(price){
    return (price+price*10/100)
})
console.log(result)  */


// Use map() to create a new array containing only the product names.// 
/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

let result = products.map(function(product){
    return product.name
});

console.log(result)   */

/* Use map() to create a new array of objects where each object contains:

name → original product name
price → original price increased by 10%  */

/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];


let result = products.map(function(product){
    return {
        name:product.name,
        price: product.price+product.price*10/100
    }
});

console.log(result);    */

/* Use map() to return a new object containing:

name → original name
price → original price
discount → 10% of the original price  */

/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];


let result = products.map(function(product){
    return{
        name: product.name,
        price: product.price,
        discont: product.price*10/100
    }
})

console.log(result);  */

/* If price >= 2000, increase the price by 10%
Otherwise, increase it by 5%
Return a new object containing name and the updated price */
/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 10000 }
];

let result = products.map(function(product){
    if(product.price>=2000){
       return{
               name: product.name,
              updatedprice:product.price+product.price*10/100
       };
        
    }else{
        return{
                  name: product.name,
              updatedprice: product.price+product.price*5/100
        };
    }
});

console.log(result)  */

/*price >= 2000 → category: "Expensive"
price < 2000 → category: "Affordable */
/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 10000 }
];


let result = products.map(function(product){
    if(product.price>=2000){
        return{
            name:product.name,
            price: product.price,
            category: "Expensive"
        };
    }else{
        return{
            name : product.name,
            price : product.price,
             category: "Affordable"
        }
    }
});

console.log(result)  */


/*Rules:

marks >= 40 → "Pass"
marks < 40 → "Fail"  */


let students = [
    { name: "Aman", marks: 85 },
    { name: "Rohit", marks: 42 },
    { name: "Priya", marks: 67 },
    { name: "Neha", marks: 31 }
];


let result = students.map(function(student){
   if(student.marks>=40){
            return{
                    name: student.name,
                    marks: student.marks,
                    result: "Pass"
    };
   }else{
      return{
                    name: student.name,
                    marks: student.marks,
                    result: "Fail"
   };
     }
});

console.log(result);