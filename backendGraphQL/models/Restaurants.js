var mongoose = require("mongoose");
var slug = require("slug");
var User = mongoose.model('User');

var RestaurantsSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  name: String,
  description: String,
  location: String,
  category: String,
  favoritesCount: {type: Number, default: 0}
});

RestaurantsSchema.pre("validate", function(next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});

RestaurantsSchema.methods.slugify = function() {
  this.slug =
    slug(this.name) +
    "-" +
    ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

RestaurantsSchema.methods.updateFavoriteCount = function() {
  var restaurant = this;

  return User.count({favorites: {$in: [restaurant._id]}}).then(function(count){
    restaurant.favoritesCount = count;
    return restaurant.save();
  });
};

RestaurantsSchema.methods.toJSONFor = function(user) {
  return {
    slug: this.slug,
    name: this.name,
    description: this.description,
    location: this.location,
    category: this.category,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount
  };
};



mongoose.model("Restaurants", RestaurantsSchema);
