'use strict';

var mongoose = require('mongoose');
// Pizza = mongoose.model('Pizza');
var Pizza = require('../models/pizzaModel');
var Topping = require('../models/Topping');
console.log("in controller");
function response(data) {
  dataObj = JSON.parse(data.body);
  let resp;
  if (dataObj.error) {
    // resp.
  }
}

exports.list_all_pizza = function (req, res) {

  // console.log("in list all pizzA");

  Pizza.find({}, function (err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};

exports.create_a_pizza = function (req, res) {
  var new_pizza = new Pizza(req.body);
  new_pizza.save(function (err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};

exports.get_pizza = function (req, res) {
  console.log("in get pizza");
  Pizza.find({ 'id': req.params.id }, function (err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};


exports.update_pizza = function (req, res) {
  console.log("in update pizza");
  Pizza.findOneAndUpdate({ 'id': req.params.id }, req.body, { new: true }, function (err, pizza) {
    // console.log(res);
    console.log(err);
    if (err)
      pizza.send(err);
    res.json(pizza);

    // return ({"message":"successful"});
  });
};

exports.delete_pizza = function (req, res) {
  Pizza.findOneAndRemove({ 'id': req.params.id }, function (err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};



// // api for toppings

exports.create_topping = function (req, res) {

  Pizza.find({ 'id': req.params.pizzaId }, function (err, pizza) {
    if (err) {
      res.send(err);
    } else {
      req.body["pizza_id"] = Number(req.params.pizzaId);
      var newTopping = new Topping(req.body)
      newTopping.save(function (err, topping) {
        if (err)
          res.send(err);
        res.json(topping);
      });
    }

  });
};


exports.get_all_toppings = function(req, res) {
  Topping.find({'pizza_id':req.params.pizzaId}, function(err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};


exports.get_topping = function(req, res) {
  Topping.find({'pizza_id':req.params.pizzaId,'id':req.params.toppingId}, function(err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};


exports.delete_topping = function(req, res) {
  Topping.findOneAndRemove({'pizza_id':req.params.pizzaId,'id':req.params.toppingId}, function(err, pizza) {
    if (err)
      res.send(err);
    res.json(pizza);
  });
};




// // apis for order 

// exports.create_order = function(req, res) {
//   Pizza.find({'id':req}, function(err, pizza) {
//     if (err)
//       res.send(err);
//     res.json(pizza);
//   });
// };


// exports.get_all_orders = function(req, res) {
//   Pizza.find({'id':req}, function(err, pizza) {
//     if (err)
//       res.send(err);
//     res.json(pizza);
//   });
// };


// exports.get_order = function(req, res) {
//   Pizza.find({'id':req}, function(err, pizza) {
//     if (err)
//       res.send(err);
//     res.json(pizza);
//   });
// };


// exports.delete_order= function(req, res) {
//   Pizza.find({'id':req}, function(err, pizza) {
//     if (err)
//       res.send(err);
//     res.json(pizza);
//   });
// };