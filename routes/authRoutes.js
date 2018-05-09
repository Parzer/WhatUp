const passport = require('passport');

module.exports = (app) => {
    //app.METHOD(PATH, (REQUEST obj,RESPONSE obj) => {do whatever and send back JSON};);
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', 
    passport.authenticate('google'),
    (req, res) => {
        res.redirect('/surveys');
    }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();   // kills the user cookie, should not get a req.user object
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);  // passport attaches the user property & methods to the req object for user auth status
    });
};