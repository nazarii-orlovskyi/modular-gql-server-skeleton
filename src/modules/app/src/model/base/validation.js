const validate = require('validate.js');

class BaseValidation {
    constructor(requestModule) {
        this._module = requestModule;
    }

    get createConstraints() {
        throw new Error('Not implemented');
    }

    get deleteConstraints() {
        throw new Error('Not implemented');
    }

    get updateConstraints() {
        throw new Error('Not implemented');
    }

    getErrorMessage(code) {
        throw new Error('Not implemented', code);
    }

    validateCreating(data) {
        return this._validateWithConstraints(data, this.createConstraints);
    }

    validateUpdating(data) {
        return this._validateWithConstraints(data, this.updateConstraints);
    }

    validateDeliting(data) {
        return this._validateWithConstraints(data, this.deleteConstraints);
    }

    async _validateWithConstraints(data, constraints) {
        const clearData = {};

        Object.keys(data).forEach((field) => {
            if (data[field]) {
                clearData[field] = data[field];
            }
        });

        try {
            await validate.async(clearData, constraints);

            return [];
        } catch (errors) {
            if (errors instanceof Error) {
                throw errors;
            }
            return this._prepareGraphqlErrors(errors);
        }
    }

    _prepareGraphqlErrors(errors) {
        const result = [];

        if (errors) {
            Object.keys(errors).forEach((field) => {
                errors[field].forEach((errorCode) => {
                    result.push({
                        field,
                        code: errorCode,
                        message: this.getErrorMessage(errorCode),
                    });
                });
            });
        }

        return result;
    }
}

module.exports = BaseValidation;
