var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', function(req, res, next) {
  res.render('user_test_view');
});

router.post('/', function(req, res, next) {
  var email = req.body.email;
  var user = new User({
    firstName: "hard",
    lastName: "coded",
    email: email,
    password: "totally visable"
  });
  user.save();
  res.redirect('/');
});


module.exports = router;
