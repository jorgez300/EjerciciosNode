const x = require('./js-foundation/01-template')
require('./js-foundation/02-destructuring')

console.log(x.emailTemplate)


const characters = ['a', 'b', 'c']

const [, , batman] = characters;


const { getUserById } = require('./js-foundation/03-callbacks');

getUserById(2, (error, user) => {

    if (error) { throw new Error(error) }

    console.log(user);

})

const { builMakePerson } = require('./js-foundation/05-factory')
const { getAge, getUuidv4, buildLogger } = require('./plugins/index')

builMakePerson(getAge, getUuidv4)


const { getPokemonById, getPokemonById2 } = require('./js-foundation/06-promises')

getPokemonById(1).then((pokemon) => {
    console.log(pokemon.name)
});

getPokemonById2(150).then((pokemon) => {
    console.log(pokemon.name)
});

const logger = buildLogger('app.js');
logger.log('hola mundo')