'use strict';

var mongoose = require('mongoose'),
  Pizza = mongoose.model('Pizza');

exports.list_all_pizza = function(req, res) {
  Pizza.find({}, function(err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};

exports.create_a_pizza = function(req, res) {
  var new_pizza = new Pizza(req.body);
  new_pizza.save(function(err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};
