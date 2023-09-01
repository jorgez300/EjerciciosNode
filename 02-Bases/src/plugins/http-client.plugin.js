const axios = require('axios');


const fetchApiClientPlugin = {

    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json();
    }
}

const AxiosClientPlugin = {

    get: async (url) => {
        const resp = await axios.get(url)
        return resp.data;
    }
}

module.exports = {
    http: AxiosClientPlugin
}
