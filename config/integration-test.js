const knex = require('../knexfile');
const baseConfig = require('./base');

module.exports = Object.assign({}, baseConfig, {
    mainDb: {
        knex: knex['integration-test'],
    },
});
