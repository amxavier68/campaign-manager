// Determine env for deployment
if(process.env.NODE_ENV === 'production'){
    // Prod mode
    module.exports = require('./prod');
} else {
    // Dev mode
    module.exports = require('./dev');
}