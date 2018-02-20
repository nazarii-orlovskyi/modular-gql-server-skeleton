const config = require('config');
const initApp = require('./server');

initApp()
    .then((server) => {
        const PORT = config.get('server').port;
        server.app.listen(PORT, () => {
            console.log('Listen...');
        });
    })
    .catch((err) => {
        console.log(err);
    });
