var router = require("express").Router();
var mongoose = require("mongoose");
var Hotels = mongoose.model("Hotels");

//obtenim tots el hotels
router.get("/", function(req, res, next) {
  Hotels.find()
    .then(function(hotels) {
      console.log(hotels);
      return res.json({ hotels: hotels });
    })
    .catch(next);
});

router.get('/:slug', function(req, res, next) {
  console.log(req.params.slug);
  Hotels.findOne({slug: req.params.slug}).then(function(hotels){
  if(!hotels){ return res.sendStatus(401); }
      return res.json({hotels: hotels});
  }).catch(next);
});

//insertem un hotel
// create a new comment
router.post("/", function(req, res, next) {
  var hotels = new Hotels(req.body);
  
  return hotels.save().then(function() {
    res.json({ hotels: hotels.toJSONFor()});
  }).catch(next);
});

module.exports = router;
