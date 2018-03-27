const conn = require('./conn'),
      Users = require('./Users'),
      { username, password } = require('./secret');

const seed = () => Users.create({ username, password })

module.exports = {
  conn,
  models: {
    Users
  }
}