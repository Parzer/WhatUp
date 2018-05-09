// Set appropriate keys for development or production
if (process.env.NODE_ENV === 'production') {
    // In production, return the prod keys
    module.exports = require('./prod');
} else {
    // In development, return the dev keys
    module.exports = require('./dev');
}