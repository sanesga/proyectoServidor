const mongoose = require('mongoose');
const Hotels = mongoose.model('Hotels');

const resolvers = {
    Query: {
        hotel: (root, {limit, offset}) => {
            return Hotels.find().skip(offset).limit(limit).exec();
          },
       
    },
};

export default resolvers;