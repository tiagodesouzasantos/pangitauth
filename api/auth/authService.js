'use strict';
const axios = require('axios');

async function post(data) {
    try {
        let auth = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: 'cc5d6a52910648e97389',
            client_secret: '1163f8081f7a567b5cd264b2b42394236a293323',
            code: data.code
        },{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }});
        return { code: 201, data: auth.data};
    } catch (error) {
        console.error('error', error);
        if (error.code) { throw { code: error.code, msg: error.msg } }
        throw { code: 500, msg: error };
    }
}

module.exports = {
    post
}