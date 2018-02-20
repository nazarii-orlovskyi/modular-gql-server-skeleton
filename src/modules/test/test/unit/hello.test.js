const { expect } = require('chai');
const { resolvers } = require('../../graphql/hello');

describe('hello resovler', () => {
    it('return greet string', () => {
        const result = resolvers.Query.hello();

        expect(result).to.be.eq('Hello, world!');
    });
});
