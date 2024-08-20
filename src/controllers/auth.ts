import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/error";
import authService from "../services/auth";

const signUp = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    const admin = await authService.signUp(username, password)
    res.status(201).json({
        message: 'ok',
        code: 201,
        data: admin
    })
})

const logIn = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body
    const admin = await authService.logIn(username, password)
    res.status(201).json({
        message: 'ok',
        code: 201,
        data: admin
    })
})

const authController = {
    signUp,
    logIn
}

export default authController