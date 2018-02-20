const path = require('path');
const bodyParser = require('body-parser');
const { ModulesCollection } = require('modular-gql');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const passport = require('./passport');
const GraphqlContext = require('../modules/app/src/graphql/conext');

async function initGraphql(app) {
    const modules = new ModulesCollection({
        basePath: path.resolve(__dirname, '../modules'),
    });
    await modules.load();

    // init graphql endpoint
    app.use(
        '/graphql/v1',
        passport.authenticate('bearer', { session: false }),
        bodyParser.json(),
        graphqlExpress(req => ({
            schema: modules.getSchema(),
            context: new GraphqlContext(req),
        })),
    );

    // init graphiql endpoint
    app.get(
        '/graphiql/v1',
        graphiqlExpress({ endpointURL: '/graphql/v1' }),
    );

    return modules;
}

module.exports = initGraphql;
