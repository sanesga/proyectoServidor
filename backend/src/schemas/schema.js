
import { gql } from 'apollo-server-express';
/* 
    Note: In the current version of GraphQL, you can’t have an empty type even if you intend to extend it later. 
    So we need to make sure the Mutation type has at least one field — in this case we can add a fake _empty field. 
    Hopefully in future versions it will be possible to have an empty type to be extended later.
*/

const Query = gql`
    scalar Date
    type Query {
        message: String
    }
    type Mutation {
        _empty: String
    }
`;


import Hotel from "../../src/schemas/hotels/hotels.schema";


const typeDefs = [
    Query,
    Hotel
];

export default typeDefs;

