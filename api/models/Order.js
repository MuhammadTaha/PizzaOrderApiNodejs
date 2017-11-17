'use strict';
var mongoose = require('mongoose'),
// var Schema = mongoose.Schema,
orderItem = require('./OrderItem');

var OrderSchema = new mongoose.Schema({
  id: {
    type:Number
  },
  orderItems: {
    type: String,
    required: 'Kindly enter the order'
  },
  totalPrice: {
    type: Number
  },
  Recipient: {
    type: String
  }
});

module.exports = mongoose.model('Order', OrderSchema);