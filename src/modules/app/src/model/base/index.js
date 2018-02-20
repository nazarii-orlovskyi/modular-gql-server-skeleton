const { Model } = require('objection');

class BaseModel extends Model {
    get updatedAtISO() {
        return this.updatedAt.toISOString();
    }

    get createdAtISO() {
        return this.createdAt.toISOString();
    }
}

module.exports = BaseModel;
