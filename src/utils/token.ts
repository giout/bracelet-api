import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const signToken = (payload: any) => {
    const signature = <string> process.env.TOKEN_SIGNATURE
    const token = jwt.sign(payload, signature, { 
        expiresIn: 60*60*24*30 // 1 month
    })
    return token
}