var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/altIndex', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'altIndex.html'));
});

router.get('/replacejqLiteWJquery', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'replacejqLiteWJquery.html'));
});


module.exports = router;
