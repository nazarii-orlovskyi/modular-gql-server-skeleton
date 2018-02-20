const { gqlTest } = require('modular-gql');
const getAuthToken = require('../../../app/src/test/auth-token-generator');

class ModelTestHelper {
    constructor() {
        this._defaultServer = gqlTest.getServer(getAuthToken());
    }

    getAuthToken() {
        return getAuthToken();
    }

    _getServer(token) {
        return token ? gqlTest.getServer(token) : this._defaultServer;
    }
}

module.exports = ModelTestHelper;
