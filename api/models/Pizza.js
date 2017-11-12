'use strict';
var mongoose = require('mongoose');
var Topping = require('./Topping');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var PizzaSchema = new Schema({
  id: {
    type: number,
  },
  name: {
    type: String,
    required: 'Kindly enter the title'
  },
  size: {
    type: [{
        type: String,
        enum: ['Standard', 'Large']
      }],
      default: ['Standard']
  },
  price: {
    type: Topping.price
  },
  
});

module.exports = mongoose.model('Pizza', PizzaSchema);