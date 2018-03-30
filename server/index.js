const express = require('express'),
      server = express(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser'),
      db = require('./db'),
      Users = db.models.Users;

server.use([express.static(r(__dirname, '..', 'client', 'public')), m('dev'), bp.json(), bp.urlencoded({ extended: false })]);

server.use('/api', require('./api'));
server.get('/*', (req, res) => res.sendFile(r(__dirname, '..', 'client', 'public', 'index.html')));

server.use((err, req, res, next) => {
  if(err) console.log(`Catch-all error message = ${err.message}`);
})

db.conn.sync({ force: true })
.then(() => db.seed())
.then(() => server.listen(3007, console.log('made it to SLL')));