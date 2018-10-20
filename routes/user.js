const UserController = require('../app/Controllers/UserController');

module.exports = (app) => {
  app.get('/users', UserController.all);
}