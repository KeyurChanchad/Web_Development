
// Searching for data in mongo db

// use keyurKart

//It fetch all documents or rows
db.items.find()

//Return one document if it exist else null
db.items.findOne({qty : 233 });
db.items.findOne({price : 2000 });

//Filter fetching 
// This query will return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})

//It will return all objects whose rating is grather than or equal to 3
db.items.find({rating: {$gte: 3}})

//It will return all objects whose rating is grather than 3
db.items.find({rating: {$gt: 3}})

// And operator
// It will return all objects whose rating >= 3.5 and price > 4000
db.items.find({rating: {$gte: 3.5}, price:{$gt: 4000}})

// It will return all objects whose rating < 3.5 and price > 114000
db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

//It will return all objects whose rating < 3.5 OR price > 114000
db.items.find({ $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] })

//It will return all objects whose rating > 2 OR price< > 100000
db.items.find({$or : [ {rating : {$lt : 2}}, {price: {$gt : 100000}} ] })

//It will return all objects with only feild rating whose rating >= 3.5
// rating :1 means show only rating = true 
db.items.find({rating: {$gte: 2}}, {rating: 1}) 

//It will return all objects with only feild rating and price whose rating >= 3.5
db.items.find({rating: {$gte: 2}}, {rating:1, price:1})



