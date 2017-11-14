'use strict';
var mongoose = require('mongoose');
var Topping = require('./Topping');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var PizzaSchema = new Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: 'Kindly enter the name'
  },
  size: {
    type: [{
        type: String,
        enum: ['Standard', 'Large']
      }],
      default: ['Standard']
  },
  price: {
    type: Number
  },
  
});

module.exports = mongoose.model('Pizza', PizzaSchema);