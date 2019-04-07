'use strict';
module.exports = function(app){
    const auth = require('./auth/routes');
    auth(app);
}