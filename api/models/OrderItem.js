'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
SchemaTypes = mongoose.Schema.Types;
// Sequelize = require('sequelize');
// autoIncrement = require('mongoose-auto-increment');

var OrderItemSchema = new Schema({
  pizzaId: {
    type: Number,
    required: 'Kindly enter pizza id'
  },
  quantity: {
    type: Number,
    required: 'Kindly enter quantity'
  },
  
});



// var orderItem = mongoose.model('OrderItem', OrderItemSchema);
// OrderItemSchema.pre('save', function(next) {
//   var doc = this;
//   orderItem.findByIdAndUpdate({id: 'entityId'}, {$inc: { id: 1} }, function(error, counter)   {
//       if(error)
//           return next(error);
//       doc.testvalue = orderItem.seq;
//       next();
//   });
// });
// OrderItemSchema.plugin(autoIncrement.plugin,{model:"OrderItem",field:"id"});
module.exports = mongoose.model('OrderItem', OrderItemSchema);