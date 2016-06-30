var express = require('express');
var router = express.Router();
//var ip = req.app.get('ip');
/* GET home page. */
//console.log(req.apiBlock);
router.get('/', function(req, res) {
  res.render('index', { title: 'FCC Request Header'});
});

module.exports = router;
