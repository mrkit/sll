const S = require('sequelize'),
      conn = new S('postgres://localhost/slldb', { logging: false, operatorsAliases: false });

module.exports = conn;
