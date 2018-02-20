const { expect } = require('chai');
const helper = require('./helper');

describe('hello resovler', () => {
    it('return greet string', async () => {
        const result = await helper.hello();

        expect(result).to.be.eq('Hello, world!');
    });
});
