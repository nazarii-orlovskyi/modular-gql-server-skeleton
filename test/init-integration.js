const { gqlTest } = require('modular-gql');
const initApp = require('../src/server');

before(async () => {
    const serverData = await initApp();

    await serverData.modules.callInitModules();

    await gqlTest.initExpress({
        app: serverData.app,
        modules: serverData.modules,
        endpoint: '/graphql/v1',
    });
});

beforeEach(async () => {
    await gqlTest.beforeEach();
});

after(async () => {
    await gqlTest.after();
});
