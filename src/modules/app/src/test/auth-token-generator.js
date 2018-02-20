const jwt = require('jsonwebtoken');
const config = require('config');

function getAuthToken() {
    // TODO: generate test JWT from passed params

    return jwt.sign({ id: 1 }, config.get('auth').secret);
}

module.exports = getAuthToken;
