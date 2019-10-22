import { merge } from 'lodash';

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import HotelResolvers from "../../src/resolvers/hotels/hotels.resolver";

const resolvers = merge(
  HotelResolvers,

);

export default resolvers;