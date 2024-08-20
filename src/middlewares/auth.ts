import 'dotenv/config'
import { Request, Response, NextFunction } from "express"
import { AuthRequest } from "../types/auth"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { CustomError, catchAsync } from "../utils/error"

const signature = <string> process.env.TOKEN_SIGNATURE 

export const authentication = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] || ''

    // authentication with Bearer token
    if (!auth.toLowerCase().startsWith('bearer') && 
        auth.split(' ').length !== 2) {
        throw new CustomError('A003', 400)
    }
    
    const token = auth.split(' ')[1] // Bearer[0] jf8jf8rf9ff4[1]
    
    // verify token is valid
    jwt.verify(token, signature, (err, decoded) => {
        if (err) {
            throw new CustomError('A004', 401)
        }
        // add property to request object that contains token payload
        (req as AuthRequest).user = <JwtPayload> decoded 
    })
    
    return next()
})