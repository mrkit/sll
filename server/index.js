const express = require('express'),
      server = express(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser'),
      db = require('./db'),
      Users = db.models.Users;

server.use([express.static(r(__dirname, '..', 'client', 'public')), m('dev'), bp.json(), bp.urlencoded({ extended: false })]);

server.get('/*', (req, res) => res.sendFile(r(__dirname, '..', 'client', 'public', 'index.html')));

db.conn.sync({ force: true })
.then(() => server.listen(3007, console.log('made it to SLL')));