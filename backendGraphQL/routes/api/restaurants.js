var router = require("express").Router();
var mongoose = require("mongoose");
var Restaurants = mongoose.model("Restaurants");
var auth = require('../auth');
var User = mongoose.model('User');


// Preload restaurants objects on routes with ':restaurants'
router.param('rest', function(req, res, next, slug) {
  Restaurants.findOne({ slug: slug})
    .then(function (restaurants) {
      if (!restaurants) { return res.sendStatus(404); }
      req.restaurants = restaurants;
      return next();
    }).catch(next);
});


//obtenim tots el restaurants
router.get("/",auth.optional, function(req, res, next) {
  Promise.resolve(
    req.payload ? User.findById(req.payload.id): null
  ).then(
  (user)=>{
      Restaurants.find()
      .then(function(restaurants) {
        return res.json({ restaurants: restaurants.map(restaurant=>restaurant.toJSONFor(user)) });
      })
      .catch(next);
    }
  )
});

//obtenim un restaurant per el slug get(http://localhost:3001/api/restaurants/manolo)
router.get("/:slug", function(req, res, next) {
  Restaurants.findOne({ slug: req.params.slug })
    .then(function(restaurants) {
      if (!restaurants) {
        return res.sendStatus(401);
      }
      return res.json({ restaurant: restaurants });
    })
    .catch(next);
});

//obtenim les categories
router.get('/:restaurant/category', function(req, res, next) {
  Restaurants.find().distinct('category').then(function(category){
    return res.json({category: category});
  }).catch(next);
 });

//insertem un restaurant
router.post("/", function(req, res, next) {
  var restaurants = new Restaurants(req.body);

  return restaurants
    .save()
    .then(function() {
      res.json({ restaurants: restaurants.toJSONFor() });
    })
    .catch(next);
});

//delete a restaurant
router.delete("/:slug", function(req, res, next) { //search by slug
  Restaurants.findOne({ slug: req.params.slug }) //delete
    .then(function(restaurants) {
      if (!restaurants) { //id it doesn't exist, show error 401
        return res.sendStatus(401);
      } else {
        return restaurants.remove().then(function() { //if it exists, remove
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

// Agregar como favorito

// router.post('/:hotels/favorite', auth.required, function(req, res, next) {
//   var hotelId = req.hotels._id;
  
//   User.findById(req.payload.id).then(function(user){
//     if (!user) { return res.sendStatus(401); }

//     return user.favorite(hotelId).then(function(){
//       return req.hotels.updateFavoriteCount().then(function(hotel){
//         return res.json({hotel: hotel.toJSONFor(user)});
//       });
//     });
//   }).catch(next);
// });

// // // Desagregar como favorito
// router.delete('/:hotels/favorite', auth.required, function(req, res, next) {
//   var hotelId = req.hotels._id;

//   User.findById(req.payload.id).then(function (user){
//     if (!user) { return res.sendStatus(401); }

//     return user.unfavorite(hotelId).then(function(){
//       return req.hotels.updateFavoriteCount().then(function(hotel){
//         return res.json({hotel: hotel.toJSONFor(user)});
//       });
//     });
//   }).catch(next);
// });

module.exports = router;
