const conn = require('./conn'),
      S = conn.Sequelize;

const Users = conn.define('user', {
  username: S.STRING,
  password: S.TEXT
});

module.exports = Users; 