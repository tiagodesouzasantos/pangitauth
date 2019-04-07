'use strict';
const axios = require('axios');

async function post(data) {
    try {
        let authData = {
            "localhost":{
                client_id: '3a8e081b8960df638bca',
                client_secret: '6a9ededb76e0ded36e52f392df75272c589c8bc1',
                code: data.code
            },
            "tiagodesouzasantos.github.io":{
                client_id: 'cc5d6a52910648e97389',
                client_secret: '1163f8081f7a567b5cd264b2b42394236a293323',
                code: data.code
            }
        }
        let auth = await axios.post('https://github.com/login/oauth/access_token', authData[data.server] ,{
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