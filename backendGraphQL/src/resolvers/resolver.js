import { merge } from 'lodash';



import RestaurantsResolvers from "../../src/resolvers/restaurants/restaurants.resolver";

const resolvers = merge(
  RestaurantsResolvers,
);

export default resolvers;