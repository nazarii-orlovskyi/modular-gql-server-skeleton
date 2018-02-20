const { validate } = require('validate.js');
const uniqueModelField = require('./unique-model-field');

module.exports = function initValidators() {
    validate.validators.uniqueModelField = uniqueModelField;
};
