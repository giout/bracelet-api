import { getQuery } from "../utils/db"

export const auth = {
    signUp: getQuery('auth/sign-up.sql')
} 