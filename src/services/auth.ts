import { db } from "../config/db"
import { auth } from "../config/queries"
import { compareCrypted, encrypt } from "../utils/crypt"
import { CustomError } from "../utils/error"
import { signToken } from "../utils/token"

const signUp = async (username: string, password: string) => {
    const admin = await db.oneOrNone(auth.signUp, { 
        username, 
        password: encrypt(password) 
    })
    return admin
}

const logIn = async (username: string, password: string) => {
    const admin = await db.oneOrNone(auth.logIn, {
        username,
        password
    })
    if (!admin){
        throw new CustomError('A001', 400)
    }
    if (!compareCrypted(password, admin.password)){
        throw new CustomError('A002', 400)
    }
    return {
        ...admin,
        token: signToken(admin)
    }
}

const authService = {
    signUp,
    logIn
}

export default authService

