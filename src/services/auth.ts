import { db } from "../config/db"
import { auth } from "../config/queries"
import { encrypt } from "../utils/crypt"

const signUp = async (username: string, password: string) => {
    const admin = await db.oneOrNone(auth.signUp, { 
        username, 
        password: encrypt(password) 
    })
    return admin
}

const authService = {
    signUp
}

export default authService

