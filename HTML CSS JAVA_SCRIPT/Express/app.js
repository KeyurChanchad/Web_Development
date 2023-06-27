//import require module
const express = require("express");
const fs = require("fs");
const path = require("path");

//create app
const app = express();  
const hostname = "127.0.0.1";
const port = 80;
 
// Static files are for download any person without Permission and visiting web site 
// For serving static files
// Express>static(folder)
// app.use('/static', express.static('static'))

// Set the template engine as pug
// app.set('view engine', 'pug')

// Set the views directory
// views folder
// app.set('views', path.join(__dirname, 'views'))

// // Our pug demo endpoint
// app.get('/demo', (req, res)=>{ 
//     res.status(200).render('demo', { title: 'Hey Keyur', message: 'Hello there and thanks for telling me how to use pubG!' })
// });

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is home page of my first express app with keyur");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Keyur");
// });

// app.post("/", (req, res)=>{
//     res.send("This is a post request Home page of my first express app with Keyur");
// });
// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Keyur");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website cwk");
// });


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
})       
app.post('/', (req, res)=>{
    // console.log(req.body);
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputtowrite = `The details of client: Name is ${name}, ${age} year old, ${gender}, residing ${address}, More about me ${more}.`
    fs.writeFileSync('output.txt',outputtowrite )
    const params = {'message': 'Your form has been submitted sucessfully.'}
    res.status(200).render('index.pug', params);  
})       


// Start server 
app.listen(port, ()=>{
    console.log(`The application started successfully on port https://${hostname}:${port}`);
});
