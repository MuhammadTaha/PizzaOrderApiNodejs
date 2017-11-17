'use strict';
var mongoose = require('mongoose');
// autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var ToppingSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  pizza_id: {
    type: Number,
    required: 'Kindly enter the pizza reference identity'
  },
  name: {
    type: String,
    required: 'Kindly enter the title'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price'
  },

});
// var connection = mongoose.createConnection("mongodb://localhost/PizzaServiceDB");

// autoIncrement.initialize(connection);


// ToppingSchema.plugin(autoIncrement.plugin, 'Topping');
module.exports = mongoose.model('Topping', ToppingSchema);