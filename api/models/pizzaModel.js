'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.createConnection("mongodb://localhost/PizzaServiceDB");
autoIncrement.initialize(connection);


var PizzaSchema = new Schema({
  id: {
    type: Number,
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

PizzaSchema.plugin(autoIncrement.plugin,{model:"Pizza",field:"id"});
module.exports = mongoose.model('Pizza', PizzaSchema);
