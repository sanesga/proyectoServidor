var mongoose = require("mongoose");
var slug = require("slug");
var User = mongoose.model('User');

var HotelsSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  name: String,
  description: String,
  location: String,
  category: String,
  favoritesCount: {type: Number, default: 0}
});

HotelsSchema.pre("validate", function(next) {
  if (!this.slug) {
    this.slugify();
  }
  next();
});

HotelsSchema.methods.slugify = function() {
  this.slug =
    slug(this.name) +
    "-" +
    ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
};

HotelsSchema.methods.updateFavoriteCount = function() {
  var hotel = this;

  return User.count({favorites: {$in: [hotel._id]}}).then(function(count){
    hotel.favoritesCount = count;
console.log(hotel.favoritesCount);
    return hotel.save();
  });
};

HotelsSchema.methods.toJSONFor = function(user) {
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

mongoose.model("Hotels", HotelsSchema);
