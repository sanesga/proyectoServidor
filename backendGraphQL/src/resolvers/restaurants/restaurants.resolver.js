const mongoose = require('mongoose');
const Restaurants = mongoose.model('Restaurants');

const resolvers = {
    Query: {
        restaurant: (root, {limit, offset}) => {
            return Restaurants.find().skip(offset).limit(limit).exec();
          },
       
    },
};

export default resolvers;