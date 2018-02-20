const getAuthToken = require('../modules/app/src/test/auth-token-generator');

async function initAuth(app) {
    app.get('/login', (req, res) => {
        if (process.env.NODE_ENV !== 'development') {
            return res.end('Not allowed');
        }

        // TODO: check input params and generate test token

        const token = getAuthToken();

        return res.end(token);
    });
}

module.exports = initAuth;
