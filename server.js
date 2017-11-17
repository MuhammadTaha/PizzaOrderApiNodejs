var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  // autoIncrement = require('mongoose-auto-increment'),

  Pizza = require('./api/models/pizzaModel'),
  // Topping = require('./api/models/Topping'),
  // Order = require('./api/models/Order'),
  // OrderItem = require('./api/models/OrderItem'),

  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PizzaServiceDB');

// var connection = mongoose.createConnection("mongodb://localhost/PizzaServiceDB");

// autoIncrement.initialize(connection);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pizzaRoutes');
routes(app);

app.listen(port);

console.log('Pizza Order Service RESTful API server started on: ' + port);
