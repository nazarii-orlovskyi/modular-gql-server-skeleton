const typeDefs = `
    type Query {
        hello: String!
    }
`;

const resolvers = {
    Query: {
        hello() {
            return 'Hello, world!';
        },
    },
};

module.exports = { typeDefs, resolvers };
