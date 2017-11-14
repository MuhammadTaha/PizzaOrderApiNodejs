'use strict';
module.exports = function(app) {
  var PizzaController = require('../controller/PizzaController');
console.log('in Route');
  // Routes
  app.route('/pizza')
    .get(PizzaController.list_all_pizza)
    .post(PizzaController.create_pizza);


  // app.route('/pizza/:pizzaId')
  //   .get(PizzaController.read_list_all_pizza)
  //   .put(PizzaController.update_pizza)
  //   .delete(PizzaController.delete_pizza);


  // app.route('/pizza/:pizzaId/topping')
  //   .get(PizzaController.read_pizza)
  //   .post(PizzaController.update_pizza)
    
  // app.route('/pizza/:pizzaId/topping/:toppingId')
  //   .get(PizzaController.read_topping)
  //   .delete(PizzaController.update_topping)

  // app.route('/order')
  //   .get(PizzaController.list_all_order)
  //   .post(PizzaController.create_a_order);


  // app.route('/order/:orderId')
  //   .get(PizzaController.read_order)
  //   .delete(PizzaController.delete_order);


};
