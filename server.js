var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Pizza = require('./api/models/pizzaModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/PizzaServiceDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/pizzaRoutes');
routes(app);

app.listen(port);

console.log('Pizza Order Service RESTful API server started on: ' + port);
