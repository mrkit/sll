const conn = require('./conn'),
      Users = require('./Users'),
      { username, password, devpw } = require('./secret.js'),
      env = require('../../webpack.config.js').mode;

const pw = env === 'production' ? password : devpw;

const seed = () => Users.create({ username, password: pw })

module.exports = {
  conn,
  seed,
  models: {
    Users
  }
}