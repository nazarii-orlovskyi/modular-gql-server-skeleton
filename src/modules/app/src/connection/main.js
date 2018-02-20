const knex = require('knex');
const config = require('config');

const connection = knex(config.get('mainDb').knex);

module.exports = connection;
