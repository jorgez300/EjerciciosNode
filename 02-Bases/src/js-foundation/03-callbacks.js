const users = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
]

const getUserById = (id, callback) => {

    const user = users.find((user) => user.id === id)

    //return users.find(user => user.id === id);

    !user ? callback(`user not found ${id}`) : callback(null, user)

}

module.exports = {
    getUserById,
}