
// show dbs 
// use harryKart
// show collections

db.items.find({price: 22000})

// Deleting items from the Mongo Database

// deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price: 22000})

//deleteMany  will delete all documents whose price is 129000
db.items.deleteMany({price: 129000})

//delte all the documents
db.items.deleteMany({});

// db.items.insert({"name":"keyur", "rating":10, "is_man":true});
// db.items.insert({"name":"chanchad", "rating":8, "is_man":true});
db.items.deleteMany({$or: [{rating: 10}, {name:"chanchad"}] })