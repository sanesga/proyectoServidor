import { merge } from 'lodash';

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import RestaurantsResolvers from "../../src/resolvers/restaurants/restaurants.resolver";

const resolvers = merge(
  RestaurantsResolvers,
);

export default resolvers;