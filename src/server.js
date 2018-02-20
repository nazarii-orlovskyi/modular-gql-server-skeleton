const express = require('express');
const initGraphql = require('./init/graphql');
const initAuth = require('./init/auth');

module.exports = async () => {
    const app = express();

    await initAuth(app);
    const modules = await initGraphql(app);

    return { app, modules };
};
