'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PizzaSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: 'Kindly enter the id for the Pizza'
  },
  name: {
    type: String,
    required: 'Kindly enter the name for the Pizza'
  },
  size: {
    type: String,
    required: 'Kindly enter the size for the Pizza'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price for the Pizza'
  }
});

module.exports = mongoose.model('Pizza', PizzaSchema);
