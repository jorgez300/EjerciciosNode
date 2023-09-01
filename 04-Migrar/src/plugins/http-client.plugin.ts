import axios from "axios";



export const fetchApiClientPlugin = {

    get: async (url: string) => {
        const resp = await fetch(url);
        return await resp.json();
    }
}

export const AxiosClientPlugin = {

    get: async (url: string) => {
        const resp = await axios.get(url)
        return resp.data;
    }
}
