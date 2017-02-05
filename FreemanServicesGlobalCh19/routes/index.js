var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*router.get('/locprov', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/html5apihistoryyes', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'html5ApiHistoryYes.html'));
});

router.get('/exceptions', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'exceptions.html'));
});






module.exports = router;
