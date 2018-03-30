const router = require('express').Router(),
      jwt = require('jsonwebtoken'),
      Users = require('../db').models.Users,
      { jwt_secret } = require('../db/secret.js');

router.get('/', (req, res) => res.send('Hello world'));

router.post('/', (req, res, next) => {
  const { username, password } = req.body;
  Users.findOne({ where: { username, password }})
  .then(admin => {
    if(admin){
      return jwt.sign({ id: admin.id }, jwt_secret, { expiresIn: '1hr'});
    } else {
      res.sendStatus(403);
    }
  })
  .then(token => res.send(token))
  .catch(next);
});

module.exports = router;