const { GraphQLScalarType } = require('graphql');

const typeDefs = `
    scalar InputInt
    scalar InputFloat
`;

const resolvers = {
    InputInt: new GraphQLScalarType({
        name: 'InputInt',
        description: 'Used to determine input Int value' +
            ' and returning custom validation messages' +
            ' instead of GraphQL errors',
        parseValue: value => value,
        serialize() {
            throw new Error('Use this type only as input parameter in mutations');
        },
        parseLiteral() {
            throw new Error('Use this type only as input parameter in mutations');
        },
    }),

    InputFloat: new GraphQLScalarType({
        name: 'InputFloat',
        description: 'Used to determine input Float value' +
            ' and returning custom validation messages' +
            ' instead of GraphQL errors',
        parseValue: value => value,
        serialize() {
            throw new Error('Use this type only as input parameter in mutations');
        },
        parseLiteral() {
            throw new Error('Use this type only as input parameter in mutations');
        },
    }),
};

module.exports = { typeDefs, resolvers };
