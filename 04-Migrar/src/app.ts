import { json } from "stream/consumers";
import { emailTemplate } from "./js-foundation/01-template";
import { getUserById, getUserByIdOptions, getUserByIdResultOptions, iUser } from "./js-foundation/03-callbacks";
import { builMakePerson } from "./js-foundation/05-factory";
import { getPokemonById, getPokemonById2 } from "./js-foundation/06-promises";
import { getAge, getUuidv4, buildLogger } from "./plugins";



console.log(emailTemplate)


const characters = ['a', 'b', 'c']

const [, , batman] = characters;


const getusercallback = ({ error, user }: getUserByIdResultOptions) => {

    if (error) { throw new Error(error) }

    console.log(user);
}

getUserById({ id: 1, callback: getusercallback });



const logger = buildLogger('app.js');
logger.log(JSON.stringify(builMakePerson({ getAge, getUuidv4 })))

getPokemonById(1).then((pokemon) => {
    console.log(pokemon.name)
});

getPokemonById2(150).then((pokemon) => {
    console.log(pokemon.name)
});


logger.log('hola mundo')