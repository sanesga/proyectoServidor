export default `
    scalar Date 
    type listHotels {
        slug: String!,
        name: String!,
        description: String!,
        location: String!,
        category: String!,
        favoritesCount: Int,
    }

    type Query {
        allHotels: [listHotels!]!
    }
`;
