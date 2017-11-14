'use strict';

var mongoose = require('mongoose'),

Pizza = mongoose.model('Pizza');
console.log('in controller');
exports.list_all_pizza = function(req, res) {
  Pizza.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_pizza = function(req, res) {
  var new_pizza = new Pizza(req.body);
  console.log(req);
  new_pizza.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_pizza = function(req, res) {
  Pizza.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_pizza = function(req, res) {
  Pizza.findOneAndUpdate({id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_pizza = function(req, res) {


  Pizza.remove({
    id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Pizza successfully deleted' });
  });
};



Topping = mongoose.model('Topping');


exports.create_topping = function(req, res) {
    var new_pizza = new Pizza(req.body);
    new_pizza.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };
