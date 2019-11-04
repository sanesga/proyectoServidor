const mongoose = require("mongoose");
const Restaurants = mongoose.model("Restaurants");

const resolvers = {
  Query: {
    restaurants: (root, { limit, offset }) => {
      return Restaurants.find()
        .skip(offset)
        .limit(limit)
        .exec();
    }, //añadido restaurant
    restaurant: (root, { slug }) => {
      return Restaurants.findOne({ slug: slug });
    }
  }
};

export default resolvers;
