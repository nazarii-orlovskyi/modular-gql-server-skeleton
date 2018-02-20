module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            database: 'test',
            user: 'root',
            password: 'pass',
        },
    },

    'integration-test': {
        client: 'mysql2',
        connection: {
            host: '127.0.0.1',
            database: 'test_it',
            user: 'root',
            password: 'pass',
        },
    },
};
