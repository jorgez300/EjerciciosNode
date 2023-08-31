
const builMakePerson = ({ getUuidv4, getAge }) => {

    return ({ name, birthdate }) => {

        return {
            id: getUuidv4(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate) // new Date().getFullYear() - new Date(birthdate).getFullYear()
        }
    }

}

module.exports = {
    builMakePerson
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