const builder = require('sql-query').Query('sqlite');
const Model = require('../Model');

module.exports = class User extends Model
{
  getAllUsers() {
    return new Promise((resolve) => {
      this.connect.all(builder.select('id', 'name').from('users').build(), (err, rows) => {
        if (err) throw new Error;
        resolve(rows);
      })
    })
  }
}