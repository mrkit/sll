const conn = require('./conn'),
      Users = require('./Users'),
      { username, password } = require('./secret.js');

const seed = () => Users.create({ username, password })

module.exports = {
  conn,
  seed,
  models: {
    Users
  }
}