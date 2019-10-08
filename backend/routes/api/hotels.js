var router = require("express").Router();
var mongoose = require("mongoose");
var Hotels = mongoose.model("Hotels");

//obtenim tots el hotels
router.get("/", function(req, res, next) {
  Hotels.find()
    .then(function(hotels) {
      return res.json({ hotels: hotels });
    })
    .catch(next);
});

//obtenim un hotel per el slug get(http://localhost:3001/api/hotels/vernissa)
router.get("/:slug", function(req, res, next) {
  Hotels.findOne({ slug: req.params.slug })
    .then(function(hotels) {
      if (!hotels) {
        return res.sendStatus(401);
      }
      return res.json({ hotel: hotels });
    })
    .catch(next);
});

//obtenim les categories
router.get('/:hotel/category', function(req, res, next) {
  Hotels.find().distinct('category').then(function(category){
    return res.json({category: category});
  }).catch(next);
 });

//insertem un hotel
router.post("/", function(req, res, next) {
  var hotels = new Hotels(req.body);

  return hotels
    .save()
    .then(function() {
      res.json({ hotels: hotels.toJSONFor() });
    })
    .catch(next);
});

//delete an hotel
router.delete("/:slug", function(req, res, next) { //search by slug
  Hotels.findOne({ slug: req.params.slug }) //delete
    .then(function(hotels) {
      if (!hotels) { //id it doesn't exist, show error 401
        return res.sendStatus(401);
      } else {
        return hotels.remove().then(function() { //if it exists, remove
          return res.sendStatus(204);
        });
      }
    })
    .catch(next);
});

//update hotel
/*router.put("/:slug", function(req, res, next) { //search by slug
  Hotels.update({ slug: req.params.slug }) //delete
    .then(function(hotels) {
      if (!hotels) { //id it doesn't exist, show error 401
        return res.sendStatus(401);
      } else {
        return hotels.remove().then(function() { //if it exists, remove
          return res.sendStatus(204);
        });
      }
    })
    .catch(next);
});*/

module.exports = router;
