const BaseTestHelper = require('../../../app/src/test/helper');

class HelloHelper extends BaseTestHelper {
    async hello() {
        const result = await this._getServer().request('{ hello }');

        return result.data.hello;
    }
}

module.exports = new HelloHelper();
