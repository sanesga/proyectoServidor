var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var Hotel = mongoose.model('Hotel');


var ArticleSchema = new mongoose.Schema({
    slug: {type: String, lowercase: true, unique: true},
    name: String,
    description: String,
    location: String,
  }, 
  );

  ArticleSchema.plugin(uniqueValidator, {message: 'it already exists'});

ArticleSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

ArticleSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
  this.slug = slug(this.title);
};

HotelSchema.methods.toJSONFor = function(){
    return {
      slug: this.slug,
      name: this.name,
      description: this.description,
      location: this.location,
      valoration: this.valoration
    };
  };

mongoose.model('Hotel', HotelSchema);