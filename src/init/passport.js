const jwt = require('jsonwebtoken');
const config = require('config');
const passport = require('passport');
const { Strategy } = require('passport-http-bearer');

passport.use(new Strategy((token, done) => {
    try {
        const payload = jwt.verify(token, config.get('auth').secret);
        done(null, { id: payload.id });
    } catch (err) {
        done(err);
    }
}));

module.exports = passport;
