import { findHeroById } from "./services/heroes.service";


const hero = findHeroById(1);

console.log(hero ? hero : 'no encontrado')