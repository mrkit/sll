const express = require('express'),
      server = express(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser'),
      db = require('./db'),
      Users = db.models.Users;

const w = require('webpack'),
      config = require('../webpack.config.js'),
      compiler = w(config),
      wdm = require('webpack-dev-middleware')(compiler, config.devServer),
      whm = require('webpack-hot-middleware')(compiler);

server.use([wdm, whm, express.static(r(__dirname, '..', 'dist')), m('dev'), bp.json(), bp.urlencoded({ extended: false })]);

server.use('/api', require('./api'));
server.get('/*', (req, res) => res.sendFile(r(__dirname, '..', 'client', 'index.html')));

server.use((err, req, res, next) => {
  if(err) console.log(`Catch-all error message = ${err.message}`);
})

db.conn.sync({ force: true })
.then(() => db.seed())
.then(() => server.listen(3007, console.log('made it to SLL on port 3007')));