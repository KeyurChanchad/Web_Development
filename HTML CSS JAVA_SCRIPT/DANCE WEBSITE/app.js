const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ContactDance', {useNewUrlParser: true, useUnifiedTopology: true});
const port = 5500;

//Define mongoose Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    age: Number,
    address: String
  });

  //Define table or model
  const Contact = mongoose.model('Contact', ContactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

// ENDPOINTS
// app.get('/', (req, res)=>{
//     const params = {'title': 'Keyur Dance Academy'}
//     res.status(200).render('index.pug', params);
// })       

//GET request
app.get('/', (req, res)=>{   
    res.status(200).render('home.pug');
}) ;

app.get("/contact", (req, res)=>{ 
    res.status(200).render('contact.pug');
}); 

//Post request
app.post("/contact", (req, res)=>{ 
    var myData  = new Contact(req.body);
    myData.save().then(() =>{
        res.send("This Item has been saved successfully.")
    }).catch( () => {
            res.statusCode(404).send("Item was not saved to the database.")
    });
    // res.status(200).render('contact.pug');
});       

// Start server 
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});