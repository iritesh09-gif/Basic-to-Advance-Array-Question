// Check whether "Kanpur" exists.// 

let cities = ["Delhi", "Mumbai", "Lucknow", "Kanpur"];

if(cities.indexOf("Kanpur") !== -1){    // what actualy happen there 
                                        // is that the ! is always change the value 
                                        // so if ! == -1 then it means its false.
    console.log("Found");
}else{
    console.log("Not Found");
}


