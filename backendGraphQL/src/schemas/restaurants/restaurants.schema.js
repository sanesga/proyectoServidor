import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        restaurant(limit: Int, offset: Int): [Restaurants]
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
