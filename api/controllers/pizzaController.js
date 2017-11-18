'use strict';

// var mongoose = require('mongoose');
// Pizza = mongoose.model('Pizza');

require("underscore");
var Pizza = require('../models/Pizza');
var Topping = require('../models/Topping');
var Order = require('../models/Order');
var OrderItem = require('../models/OrderItem');

var connection = require('../../db');


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

  // Pizza.find({}, function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });

  // connection.query('SELECT * FROM Pizza', function(err, results) {

  //   res.send(results);
  // });
  Pizza.findAll({ raw: true }).then(result => {
    console.log(result);
  });


};

exports.create_pizza = function (req, res) {

  var request = req.body;
  Pizza.create(request)
    .then(function (newModel) {
      console.log(newModel.dataValues);
    });




  // console.log(req.body);

  // var sql = "INSERT INTO Pizza (name, size,price) VALUES ('"+req.body.name+"', '"+req.body.size+"','"+req.body.price+"')";
  // connection.query(sql, function (err, result) {
  //   if (err)
  //       res.send(err);
  //     res.json("1 record inserted");
  //   console.log("1 record inserted");
  // });

  // var new_pizza = new Pizza(req.body);
  // new_pizza.save(function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });
  //   Pizza.nextCount(function(err,count){
  //    if(count){
  //     req.body["id"]=count;
  //     var new_pizza = new Pizza(req.body);
  //     console.log(new_pizza);
  //     new_pizza.save(function (err, pizza) {console.log("here");
  //       if (err)
  //         res.send(err);
  //       res.json(pizza);
  //     });
  //    }
  //  });

  //  console.log(req.body);

};

exports.get_pizza = function (req, res) {

  var request = req.params;
  console.log("in get pizza");


  Pizza.findOne({
    where: {
      id: request.id
    }, raw: true
  }).then(result => {
    console.log(result);
  });
  // Pizza.find({ 'id': request.id }, function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });
};


exports.update_pizza = function (req, res) {
  console.log("in update pizza");
  var requestParams = req.params;
  var requestBody = req.body;

  if (requestBody['id'])
    delete requestBody['id'];

  Pizza.find({ where: { id: requestParams.id } })
    .then(function (pizza) {
      // Check if record exists in db
      console.log(pizza);
      if (pizza) {
        pizza.updateAttributes(requestBody)
          .then(function (newPizza) {
            console.log(newPizza.dataValues);
          })
      }
    })



  // Pizza.findOneAndUpdate({ 'id': req.params.id }, req.body, { new: true }, function (err, pizza) {
  //   // console.log(res);
  //   console.log(err);
  //   if (err)
  //     pizza.send(err);
  //   res.json(pizza);

  //   // return ({"message":"successful"});
  // });
};

exports.delete_pizza = function (req, res) {

  var requestBody = req.params.id;
  Pizza.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    console.log(result);

  });
  // Pizza.findOneAndRemove({ 'id': req.params.id }, function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });
};



// // api for toppings

exports.create_topping = function (req, res) {
  var requestParams = req.params;
  var requestBody = req.body;
  Pizza.findOne({
    where: {
      id: requestParams.pizzaId
    }
  }).then(result => {
    // console.log(result);
    if (result != null) {
      if (requestBody['id'])
        delete requestBody['id'];
      requestBody['pizzaId'] = parseInt(requestParams.pizzaId);

      Topping.create(requestBody)
        .then(function (newModel) {
          console.log(newModel.dataValues);
        });
    }


  });
  // Pizza.find({ 'id': req.params.pizzaId }, function (err, pizza) {
  //   if (err) {
  //     res.send(err);
  //   } else {
  //     req.body["pizza_id"] = Number(req.params.pizzaId);
  //     var newTopping = new Topping(req.body);
  //     newTopping.save(function (err, topping) {
  //       if (err)
  //         res.send(err);
  //       res.json(topping);
  //     });
  //   }

  // });
};


exports.get_all_toppings = function (req, res) {
  // Topping.find({ 'pizza_id': req.params.pizzaId }, function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });
  var requestParams = req.params;
  Topping.findAll({ where: { pizzaId: requestParams.pizzaId }, raw: true }).then(result => {
    console.log(result);
  });
};


exports.get_topping = function (req, res) {
  // Topping.find({ 'pizzaId': req.params.pizzaId, 'id': req.params.toppingId }, function (err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });

  var requestParams = req.params;
  Topping.findOne({ where: { 'pizzaId': req.params.pizzaId, 'id': req.params.toppingId }, raw: true }).then(result => {
    console.log(result);
  });
};


exports.delete_topping = function (req, res) {
  Topping.destroy({ where: { 'pizza_id': req.params.pizzaId, 'id': req.params.toppingId }, raw: true }.then(result => {
    console.log(result);
  }));
};




// // apis for order 

exports.create_order = function (req, res) {

  //  console.log(req.body["orderItems"]);
  // if(req.body["orderItems"]!=null){
  //  req.body["orderItems"]["id"] = 4;
  var totalCost = 0;
  var pId = 0;

  req.body["orderItems"].forEach(element => {
    console.log(element.pizzaId);


    var request = req.body;
    console.log(request["recipient"]);
    OrderItem.create(element)
      .then(function (newModel) {
        if(newModel.dataValues.pizzaId)
        {
          pId=newModel.dataValues.pizzaId;
          var orderData = {
            "totalprice":request["totalPrice"],
            "recipient":request["recipient"],
            "orderItemId":newModel.dataValues.id,
          };

          Order.create(orderData)
          .then(function (newOrder) {
            console.log(newOrder.dataValues);
          });
        }
        // console.log(newModel.dataValues);
        // console.log(newModel.dataValues.pizzaId);
        // console.log(newModel.dataValues.quantity);
        
        
      });
    // var orderItem = new OrderItem(element);
    // console.log(orderItem);

    // orderItem.save(function (err, item) {
    //   console.log(item);
    //   if (err)
    //     res.send(err);

    //   res.json(item);
    // });

  });
  // }
  // Pizza.find({'id':req}, function(err, pizza) {
  //   if (err)
  //     res.send(err);
  //   res.json(pizza);
  // });
};


exports.get_all_orders = function(req, res) {
  var requestParams = req.params;
  if(requestParams){
    var arr = [];
    Order.findAll({ attributes: ['id'], raw: true }).then(result => {
    result.forEach(element=>{
      arr.push(element.id);
    });
    console.log(arr);
    });
  }

};


exports.get_order = function(req, res) {
  var requestParams = req.params;
  if(requestParams){
    
    Order.findAll({ where:{id : requestParams.orderId }, attributes: ['id'], raw: true }).then(result => {
      console.log(result);
    });
  }
};


// exports.delete_order= function(req, res) {
//   Pizza.find({'id':req}, function(err, pizza) {
//     if (err)
//       res.send(err);
//     res.json(pizza);
//   });
// };