var router = require("express").Router();
var email = require("../../utils/email.js");

router.post("/", function(req, res, next) {
  console.log("estamos en el backend recibiendo datos" + req.body);

  console.log("nombre" + req.body.name);

  email.sendMail(req, res);
});

function comprobarDatos(datos) {
  
  if(datos!=""){
    return true;
   }else{
   return false;
 }
}

module.exports.router = router;
module.exports.comprobarDatos = comprobarDatos;
