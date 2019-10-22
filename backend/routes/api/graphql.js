import { ApolloServer } from "apollo-server-express"
import typeDefs from "../../src/schemas/schema";
import resolvers from "../../src/resolvers/resolver";

const SERVER = new ApolloServer({
    typeDefs,
    resolvers
});

export default SERVER;