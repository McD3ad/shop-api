const path = require('path');
const sqlite3 = require('sqlite3').verbose();

module.exports = class Model {
  constructor() {
    this.db = new sqlite3.Database(path.join(__dirname, '../../database/db.sqlite'));
  }

  get connect() {
    return this.db;
  }
};
