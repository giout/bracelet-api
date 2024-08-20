import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/error";
import userService from "../services/user";

const getAll = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const page = Number.isInteger(Number(req.query.page)) ? req.query.page : 1
    const limit = Number.isInteger(Number(req.query.limit)) ? req.query.limit : 10

    const users = await userService.getAll(<number> page, <number> limit)

    res.status(200).json({
        message: 'ok',
        code: 200,
        data: users,
        page: Number(page),
        limit: Number(limit)
    })
})

const userController = {
    getAll
}

export default userController