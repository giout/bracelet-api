import { getQuery } from "../utils/db"

export const auth = {
    signUp: getQuery('auth/sign-up.sql'),
    logIn: getQuery('auth/log-in.sql')
} 

export const user = {
    getAll: getQuery('user/get-all.sql'),
    create: getQuery('user/create.sql'),
    update: getQuery('user/update.sql'),
    delete: getQuery('user/delete.sql')
}

export const bracelet = {
    getAll: getQuery('bracelet/get-all.sql'),
    create: getQuery('bracelet/create.sql')
}