var mongoose = require('mongoose');
var slug = require('slug');

var HotelsSchema = new mongoose.Schema({
    slug: {type: String, lowercase: true, unique: true},
    name: String,
    description: String,
    location: String
});

HotelsSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

HotelsSchema.methods.slugify = function() {
  this.slug = slug(this.name) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};


HotelsSchema.methods.toJSONFor = function(){
  return {
    slug: this.slug,
    name: this.name,
    description: this.description,
    location: this.location
  };
};

mongoose.model('Hotels', HotelsSchema);