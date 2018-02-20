class BaseRequestModule {
    constructor(req, knex) {
        this._knex = knex;
        this._identity = req.user;
    }

    get identity() {
        return this._identity;
    }

    get knex() {
        return this._knex;
    }
}

module.exports = BaseRequestModule;
