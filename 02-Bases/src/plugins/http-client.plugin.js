const axios = require('axios');


const fetchApiClientPlugin = {

    get: async (url) => {
        const resp = await fetch(url);
        return await resp.json();
    }
}

const AxiosClientPlugin = {

    get: async (url) => {

        return await axios.get(url)

    }
}

module.exports = {
    http: AxiosClientPlugin
}
