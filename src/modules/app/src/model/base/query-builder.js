const { QueryBuilder } = require('objection');

class BaseQueryBuilder extends QueryBuilder {
    idIn(ids) {
        this.whereIn('id', ids);
    }
}

module.exports = BaseQueryBuilder;
