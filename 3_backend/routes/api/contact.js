var router = require('express').Router();
var email = require('../../utils/email.js');

router.post('/', function(req, res, next){
 
  console.log("estamos en el backend recibiendo datos"+req.body);

  email.sendMail(req,res);
 
});

module.exports = router;
