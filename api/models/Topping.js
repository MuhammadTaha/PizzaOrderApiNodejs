'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchemaTypes = mongoose.Schema.Types;

var ToppingSchema = new Schema({
  id: {
    type: number,
  },
  name: {
    type: String,
    required: 'Kindly enter the title'
  },
  price: {
    type: SchemaTypes.Double,
    required: 'Kindly enter the price'
  },
  
});

module.exports = mongoose.model('Topping', ToppingSchema);