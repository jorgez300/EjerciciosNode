interface builMakePersonOptions {
    getUuidv4: () => string,
    getAge: (birthdate: string) => number
}

interface PersonOptions {
    name: string,
    birthdate: string

}

export const builMakePerson = ({ getUuidv4, getAge }: builMakePersonOptions) => {

    return ({ name, birthdate }: PersonOptions) => {

        return {
            id: getUuidv4(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate) // new Date().getFullYear() - new Date(birthdate).getFullYear()
        }
    }

}


/*
const obj = { name: 'a', birthdate: '2022-01-01' }

const buildPerson = ({ name, birthdate }) => {

    return {
        id: getUuidv4(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate) // new Date().getFullYear() - new Date(birthdate).getFullYear()
    }

}

const jorge = buildPerson(obj);

console.log(jorge)

*/