import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        restaurants(limit: Int, offset: Int): [Restaurants]
        restaurant(slug: String!): Restaurants
    }
   
    type Restaurants {
        slug: String!,
        name: String!,
        description: String!,
        location: String!,
        category: String!,
        favoritesCount: Int,
    }
`;

export default typeDefs;
// restaurant(slug: String!): Restaurant