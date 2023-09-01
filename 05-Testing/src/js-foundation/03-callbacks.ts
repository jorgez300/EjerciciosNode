export interface iUser {
    id: number,
    name: string
}

export interface getUserByIdOptions {
    id: number,
    callback: ({ error, user }: getUserByIdResultOptions) => void
}

export interface getUserByIdResultOptions {
    error?: string,
    user?: iUser
}


const users: iUser[] = [
    {
        id: 1,
        name: 'a'
    },
    {
        id: 2,
        name: 'b'
    }
]

export const getUserById = ({ id, callback }: getUserByIdOptions): void => {

    const user = (users.find((user) => user.id === id))

    //return users.find(user => user.id === id);
    !user ? callback({ error: `user not found ${id}`, user: undefined }) : callback({ error: undefined, user: user })

}
