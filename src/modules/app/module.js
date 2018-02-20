const { BaseModule } = require('modular-gql');
const initValidators = require('./src/validation');
const knex = require('../app/src/connection/main');

class AppModule extends BaseModule {
    constructor() {
        super({ rootPath: __dirname });
    }

    init() {
        initValidators();
    }

    async destroy() {
        await knex.destroy();
    }
}

module.exports = {
    module: new AppModule(),
};
