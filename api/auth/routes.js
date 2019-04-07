'use strict';
const controller = require('./authController');
module.exports = function (app) {
    app.post('/api/auth',controller.post);
}