'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SchemaTypes = mongoose.Schema.Types;

var OrderItemSchema = new Schema({
  pizzaId: {
    type: number,
    required: 'Kindly enter the title'
  },
  price: {
    type: SchemaTypes.Double,
    required: 'Kindly enter the price'
  },
  
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);