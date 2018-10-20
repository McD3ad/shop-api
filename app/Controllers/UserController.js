const User = require('../Models/User/User');

const user = new User;

module.exports.all = (req, res) => {
  user.getAllUsers().then((data) => res.json(data));
};
