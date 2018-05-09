const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session'); // give access to cookies
const passport = require('passport');            // keep track of user session / auth state via cookies
const keys = require('./config/keys');
require('./models/User');
require('./services/passport'); // Keep note of order
//const authRoutes = require('./routes/authRoutes');

mongoose.connect(keys.mongoURI); //connect to remote mongo instance

const app = express() //generate a new express app

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]  //can provide multiple keys to secure cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); //pass in the express object to this function and attach our routes to it 

const PORT = process.env.PORT || 5000; //get injected environment variable or port 5000
app.listen(PORT);