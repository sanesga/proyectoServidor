
import { gql } from 'apollo-server-express';

const Query = gql`
    scalar Date
    type Query {
        message: String
    }
    type Mutation {
        _empty: String
    }
`;


import Restaurants from "../../src/schemas/restaurants/restaurants.schema";

const typeDefs = [
    Query,
    Restaurants
];

export default typeDefs;

