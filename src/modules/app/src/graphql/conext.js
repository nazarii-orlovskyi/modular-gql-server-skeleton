/**
 * This class will be passed to all GraphQL queries and mutations as context
 */
class GraphqlContext {
    constructor(req) {
        this._req = req;
    }

    get user() {
        return this._req.user;
    }

    getModule(name) {
        // TODO: load request module

        throw new Error(`Unknown module "${name}"`);
    }
}

module.exports = GraphqlContext;
