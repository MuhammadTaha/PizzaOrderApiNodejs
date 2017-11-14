'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
SchemaTypes = mongoose.Schema.Types,
Sequelize = require('sequelize');

var OrderItemSchema = new Schema({
  pizzaId: {
    type: Number,
    required: 'Kindly enter the title'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price'
  },
  
});

module.exports = mongoose.model('OrderItem', OrderItemSchema);