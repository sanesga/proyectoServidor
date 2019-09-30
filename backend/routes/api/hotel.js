var router = require("express").Router();
var mongoose = require("mongoose");
var Hotel = mongoose.model("Hotel");
var auth = require("../auth");

/*router.get("/", function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  return Promise.all([
    Hotel.find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .exec(),
  ]).then(function(results){

console.log(result);
  });
})*/

router.post('/:hotel', function(req, res) {
 
    var hotel = new Hotel(req.body.hotel);
    
    return hotel.save().then(function(){

    });
  });

module.exports = router;
