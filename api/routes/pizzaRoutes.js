'use strict';

module.exports = function(app) {
  var pizza = require('../controllers/pizzaController.js');

  // pizza Routes
  app.route('/pizza')
    .get(pizza.list_all_pizza)
    .post(pizza.create_a_pizza);
};
