// show dbs 
// use harryKart
// show collections

db.items.find()
db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})
db.items.find()
db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 2}})

db.items.updateMany({_id:ObjectId("60250246834dc88574157efb")}, {$set: {rating: 9, price : 35000}} )