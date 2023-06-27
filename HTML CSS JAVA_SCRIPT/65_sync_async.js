// Synchronous or blocking
// - line by line execution

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// This is Asynchronous
// const fs = require("fs");
// fs.readFile("delete.txt", "utf-8", (error, data)=>{
//     console.log(error, data);
// });
// console.log("This is a message");

// This is callback function 1) error 2) data 3) call back(err, data)=>{
    //     console.log(err, data);
    // }


const fs = require("fs");
fs.readFile("delete.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");
