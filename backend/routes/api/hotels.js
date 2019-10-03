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
//obtenim un hotel per el slug get(http://localhost:3001/api/hotels/vernissa)
router.get('/:slug', function(req, res, next) {
  console.log(req.params.slug);
  Hotels.findOne({slug: req.params.slug}).then(function(hotels){
  if(!hotels){ return res.sendStatus(401); }
      return res.json({hotels: hotels});
  }).catch(next);
});

//insertem un hotel
router.post("/", function(req, res, next) {
  var hotels = new Hotels(req.body);
  
  return hotels.save().then(function() {
    res.json({ hotels: hotels.toJSONFor()});
  }).catch(next);
});

//borrem un hotel
/*router.delete('/:slug', function(req, res, next) {
    if (!user) { return res.sendStatus(401); }

    if(req.article.author._id.toString() === req.payload.id.toString()){
      return req.article.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  })
});*/

module.exports = router;
