var express = require('express');

var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient,
routes = require('./api/routes/PizzaRoute'); //importing route
mongoose = require('mongoose'),
Order = require('./api/models/Order'), 
Pizza = require('./api/models/Pizza'), 
OrderItem = require('./api/models/OrderItem'), 
Topping = require('./api/models/Topping'), 

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/PizzaAppDB", function(err, db) {
  if(!err) {
    console.log("Database connected...");
  }
});

app = express(),
port = process.env.PORT || 3001;
app.get('/', function(req, res){
    res.send('hello world');
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route


app.listen(port);

console.log('Pizza Order REST API server started on: ' + port);