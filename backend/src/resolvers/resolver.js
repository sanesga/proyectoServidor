import { merge } from 'lodash';

const QueryResolvers = {
  Query: {
      message: () => 'Hello World!'
  }
}

import HotelResolvers from "../../graphql/resolvers/hotels/hotel.resolver";

const resolvers = merge(
  HotelResolvers,
);

export default resolvers;
