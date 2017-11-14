'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var ToppingSchema = new Schema({
  id: {
    type: Number,
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

module.exports = mongoose.model('Topping', ToppingSchema);