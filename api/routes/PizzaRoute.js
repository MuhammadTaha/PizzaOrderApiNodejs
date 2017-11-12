'use strict';
module.exports = function(app) {
  var PizzaController = require('../controller/PizzaController');

  // Routes
  app.route('/pizza')
    .get(PizzaController.list_all_pizza)
    .post(PizzaController.create_a_pizza);


  app.route('/pizza/:pizzaId')
    .get(PizzaController.read_a_talist_all_pizza)
    .put(PizzaController.update_a_pizza)
    .delete(PizzaController.delete_a_pizza);


  app.route('/pizza/:pizzaId/topping')
    .get(PizzaController.read_a_pizza)
    .post(PizzaController.update_a_pizza)
    
  app.route('/pizza/:pizzaId/topping/:toppingId')
    .get(PizzaController.read_a_pizza)
    .delete(PizzaController.update_a_pizza)

  app.route('/order')
    .get(PizzaController.list_all_order)
    .post(PizzaController.create_a_order);


  app.route('/order/:orderId')
    .get(PizzaController.read_order)
    .delete(PizzaController.delete_order);


};
