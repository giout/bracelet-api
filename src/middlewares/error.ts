import { NextFunction, Request, Response } from "express"
import { CustomError } from '../utils/error'
import { auth, user } from "../config/error"

const errorObject: any = { ...auth, ...user }

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    if (err instanceof CustomError) 
        return res.status(err.statusCode).json({ 
            message: errorObject[err.message] ? errorObject[err.message] : err.message,
            code: err.statusCode
        })
    
    if (err.code === 'P0001')
        return res.status(400).json({
            message: errorObject[err.message],
            code: 400
        })
    
    return res.status(500).json({ message: err.message, code: 500 })
}