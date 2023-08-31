const { http } = require('../plugins')

const getPokemonById = (id) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch(URL)
        .then((response) => response.json())
        .catch((error) => { throw new Error('No se encontro pokemon') })
}

const getPokemonById2 = async (id) => {

    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return await http.get(URL);
}

module.exports = {
    getPokemonById,
    getPokemonById2
}