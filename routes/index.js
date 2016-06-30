var express = require('express');
var router = express.Router();
//var ip = req.app.get('ip');
/* GET home page. */

router.get('/', function(req, res) {

  //console.log(ip);
  var ip = req.headers['x-forwarded-for'] || req.headers['X-Forwarded-For'] || req.connection.remoteAddress,
      language = req.acceptsLanguages(),
      software = req.get('User-Agent'),
      pattern = software.match(/(\([^)]*\)).*?/);
      software = pattern[0].slice(1, -1);
      language = language[0];
      console.log(ip);
      //if(ip) ip = ip.substring(7 , ip.length);

  var header = {
                  "ipaddress": ip ,
                  "language": language,
                  "software": software
              };
  res.render('index', { title: 'FCC Request Header ',
                        header: header});

});

module.exports = router;
