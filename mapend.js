// create a new array in which every number is multiplied by 3.//
/*
let numbers = [10, 20, 30, 40, 50];

let result = numbers.map(function(number){
    return number*3
});

console.log(result)  */

/*create a new array where:

If the number is greater than 40, return "High"
Otherwise, return "Low"  */

/*
let numbers = [10, 25, 40, 55, 70];

let result = numbers.map(function(number){
    if (number>40){
                    return "High"
    }else{
        return "Low"
    }
});
console.log(result)  */

/* create a new array:

Age 18 or above → "Adult"
Below 18 → "Minor"    */
/*
let ages = [12, 18, 25, 15, 30];

let result = ages.map(function(age){
    return age>=18 ? "Adult" : "Minor"
});
console.log(result)   */


/* return a new array of objects where each object contains:

name
price
discountedPrice

discountedPrice should be the original price after a 10% discount. */
/*
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];


let result = products.map(function(product){
          return{
            name : product.name,
            price : product.price,
            discountedPrice: product.price-product.price*10/100
          }
});

console.log(result)  */

/*  return a new array of objects containing:

name
marks
result

Rules:

marks >= 50 → "Pass"
marks < 50 → "Fail"   */
/*
let students = [
    { name: "Aman", marks: 85 },
    { name: "Rohit", marks: 42 },
    { name: "Priya", marks: 67 },
    { name: "Neha", marks: 30 }
];


let result = students.map(function(student){
     if(student.marks>=50){
     return{
              name: student.name,
              marks: student.marks,
              result: "Pass"
     }  

     }else{
        return{
            name: student.name,
            marks: student.marks,
            result: "Fail"
        }
     }
});

console.log(result)  */

/* return a new array of objects containing:

name
price
finalPrice
category

Rules:

1. Discount:

If price is greater than or equal to 10,000 → 20% discount
Otherwise → 10% discount   */


let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];


let result = products.map(function(product){
    if(product.price>=10000){
        return{
            name: product.name,
            price: product.price,
            finalPrice:product.price-product.price*20/100,
            category:"Expensive"
        }
    }else{
        return{
            name: product.name,
            price: product.price,
            finalPrice: product.price-product.price*10/100,
            category:"Affordable"
        }
    }
});
console.log(result)



