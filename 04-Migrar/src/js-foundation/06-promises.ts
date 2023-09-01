import { AxiosClientPlugin } from "../plugins";

export const getPokemonById = (id: number) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => { throw new Error('No se encontro pokemon') })
}

export const getPokemonById2 = async (id: number) => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return await AxiosClientPlugin.get(URL);
}

