// MONGODB DATABASE

const { platform } = require("os")

// Download mongobd center from "https://www.mongodb.com/try/download/community"
// Create directory in C: named data inside another directory db "C:\data\db" if not created then gives error at a time of mongod process. 
// copy path of bin file where mongo and mongod are there and set path of environment variable. 

// What is MONGO DB?
//No SQL Database
// Document orientaed
// open source, cross platform, document oriented database, written in c++

// In mongodb Database = Database, Tables = Collections, Rows = Documents
//Data is stored in BJSON form means it same as json but we must declare type of variable.

// mongod is the host process for the database. mongod in main process that connect to mongo database. 
// mongo is the command line shell that connect to a specific instance of mongod. 
//Instead of mongo we can connect mongod by python (pymongo), nodejs(mongoose)

// 1. Open mongo shell or any terminal and run 'mongod' main process
// 2. And other terminal run 'mongo' to make as mongo shell

// To show databases  ---> show dbs 
// To show tables     ---> show collections
// To use database or if it's exist then created   --->use keyurkart

// Inserting data in mongo db
// use keyurKart
//db.items.insert({}) db which database use that db, items is table name, insert row
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])



//dump all databases
// 1. open cmd as Administrator
// 2. change path 'cd C:\Program Files\MongoDB\Server\4.4\bin' 
// write command 'mongodump' that dump all databases
//Above command create a dump file in bin folder with all databases inside that create bjson and json files

//dump a particular database
// 'mongodump --db database_name'  -->mongodump --db info

// drop database
// In mongo shell
// 1. use database
// 2. db.dropDatabase()


//import database
// 1. open cmd as Administrator
// 2. change path 'cd C:\Program Files\MongoDB\Server\4.4\bin' 
// syntax 'mongorestore --db database_name dump(folder)/your-database-folder' with bjson and json'
//If in bin folder dump is not there then create it manually. Put all database folder with json and bjson.
// ex. -->'mongorestore --db raoforms dump/form-builder-db-dump' that dump all databases
//Above command create a dump file in bin folder with all databases inside that create bjson and json files

// import data from json file 
// mongoimport --db test --collection employees --file employeesdata.json --jsonArray
// The above command will import data into the employees collection in the test database. Note that --jsonArray indicates that the data in a file contains in an array.

// Import Data from CSV File
// Consider that you have D:\employeesdata.csv file which you want to import into new employee collection. Execute the following command to import data from the CSV file.

// mongoimport --db test --collection employeesdata --type csv --file employees.csv --fields _id,firstName,lastName

// The --fields option indicates the field names to be used for each column in the CSV file. If a file contains the header row that should be used as a field name then use --headerline option instead of --fields. The above command will insert all data into employees collection.
// db.employees.find()



