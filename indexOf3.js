// Using indexOf(), check whether "JavaScript" exists in://


let languages = ["HTML", "CSS", "JavaScript", "Python"];
if(languages==("JavaScript") !== -1){    // what actualy happen there 
                                        // is that the ! is always change the value 
                                        // so if ! == -1 then it means its false
    console.log("Found") 
}else{
    console.log("Not Found")
}
