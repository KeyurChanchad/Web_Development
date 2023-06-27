// From mongoose documentation "mongooes.com/docs/"
// First need to connecte with the mongo database by mongod process in any one terminal and in other terminal type 'mongo' this gives access to write mongodb command in mongo
//cd Mongooes tut
// npm i --> npm install
// npm init
// npm install mangoose
// Add anothercollection db.collections.insert({})


// Mongoose is a JavaScript object-oriented programming module/library/package that creates a connection between MongoDB and the Node.js JavaScript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/keyurkart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!   this show later because it work on non blocking io model
  console.log("We are connected successfully!!!");
});

//This is schema means local structure of database which type of data you want to store
const keyurSchema = new mongoose.Schema({
    name: String
  });

//  let's take a look at how to add "speak" functionality to our documents:
 keyurSchema.methods.speak = function () {
    let greeting ="My name is " + this.name
    console.log(greeting);
  }

// This converts into final model(collection/table)
// Name of the collection is getting plural of 'chanchad' 'chanchads'
  const chanchad = mongoose.model('chanchad', keyurSchema);

  //inserting objects or rows
  const keyurboss = new chanchad({ name: 'Jay Shree Krishna' });
  const kbc = new chanchad({ name: 'Shree Ganeshay Namah:' });
  // console.log(keyurboss.name); // 'Jay Shree Krishna'
  // keyurboss.speak();  

  //This part save object
  keyurboss.save(function (err, kb) {
    if (err) return console.error(err);
    kb.speak();
  });

  kbc.save(function (err, ckh) {
    if (err) return console.error(err);
    ckh.speak();
  });
  
  // Find Method
  chanchad.find({name : "Jay Shree Krishna"},function (err, chanchads) {
    if (err) return console.error(err);
    console.log(chanchads);
  })
  chanchad.find({name : "Shree Ganeshay Namah:"},function (err, data) {
    if (err) return console.error(err);
    console.log(data);
  })