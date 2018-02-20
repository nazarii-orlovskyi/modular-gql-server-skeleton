// TODO: write unit test

const validate = require('validate.js');
const { Model } = require('objection');

/**
 * Validator params:
 *   model - Objection model. REQUIRED
 *   field - unique model field. REQURED
 *   message - error message when value is not unique. OPTIONAL
 */
module.exports = async function uniqueModelField(value, options) {
    // Validate input options
    if (!options.model) {
        throw new Error('Option "model" is required');
    }
    if (!options.model.prototype
        || !(options.model.prototype instanceof Model)
    ) {
        throw new Error('Option "model" is not an instanse of Objection Model class');
    }
    if (!options.field) {
        throw new Error('Option "field" is required');
    }
    if (!validate.isString(options.field)) {
        throw new Error('Option "field" is not a string');
    }
    let errorMessage = 'Enitity with same value are already exists';
    if (options.message) {
        if (!validate.isString(options.message)) {
            throw new Error('Option "message is not a string"');
        }
        errorMessage = options.message;
    }

    // Skip value validation if it is undefined
    if (typeof value === 'undefined') {
        return null;
    }

    const exists = await options.model
        .query()
        .column(options.model.raw('1'))
        .where(options.field, value)
        .first();

    if (exists) {
        return errorMessage;
    }

    return null;
};
