'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect('/tweets');
  // res.render('index');
});

module.exports = router;
