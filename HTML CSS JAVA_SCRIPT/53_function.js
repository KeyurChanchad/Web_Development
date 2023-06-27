console.log("This is tutorial 53");

function greet(name, greetText="Greetings from JavaScript"){
    let name1 = "Name1";       // local variable
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
}


let name = "Keyur";
let name1 = "Ankit";
let name2 = "Tushar";
let name3 = "Vishal";
let greetText1 = "Good Morning";

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");  
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3);

// let returnVal = greet(name3);
// console.log(returnVal)

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned");
}

let returnVal = sum(1,2,3);
console.log(returnVal);
