const knexConfig = require('../knexfile');

module.exports = {
    server: {
        port: 8080,
    },

    auth: {
        secret: 'secret',
    },

    mainDb: {
        knex: knexConfig.development,
    },
};
