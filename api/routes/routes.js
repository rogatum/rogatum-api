'use strict';
module.exports = function(app) {
  var stubController = require('../controllers/controller');

  app.route('/stubs')
    .get(stubController.list)
    .post(stubController.create);


  app.route('/stubs/:id')
    .get(stubController.read)
    .put(stubController.update)
    .delete(stubController.remove);

    app.route('/stubs/search/:string')
    .get(stubController.find);
};
