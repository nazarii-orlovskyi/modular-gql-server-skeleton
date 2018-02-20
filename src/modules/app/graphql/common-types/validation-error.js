const typeDefs = `
    type ValidationError {
        field: String!
        code: String!
        message: String!
    }
`;

const resolvers = {};

module.exports = { typeDefs, resolvers };
