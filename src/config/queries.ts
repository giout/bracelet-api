import { getQuery } from "../utils/db"

export const auth = {
    signUp: getQuery('auth/sign-up.sql'),
    logIn: getQuery('auth/log-in.sql')
} 