import { gql } from 'apollo-server-express';

const typeDefs = gql`
    extend type Query {
        hotel(limit: Int, offset: Int): [Hotels]
    }
   
    type Hotels {
        slug: String!,
        name: String!,
        description: String!,
        location: String!,
        category: String!,
        favoritesCount: Int,
    }
`;

export default typeDefs;
