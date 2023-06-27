// This is Modules
//Learn more modules in node js

const fs = require("fs");
let text = fs.readFileSync("delete.txt", "utf-8");

console.log("The content of the file is")
console.log(text);

//basically it is string we can apply string function.
text = text.replace("browser", "VS code");
// text = text.toUpperCase();


console.log("Creating a new file...")
fs.writeFileSync("info.txt", text);
