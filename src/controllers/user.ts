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

const create = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const user = await userService.create(req.body.username, req.body.id_card)

    res.status(201).json({
        message: 'ok',
        code: 201,
        data: user
    })
})

const update = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    await userService.update(req.params.id, req.body.username, req.body.id_card)

    res.status(200).json({
        message: 'ok',
        code: 200
    })
})

const delete_ = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    await userService.delete_(req.params.id)

    res.status(200).json({
        message: 'ok',
        code: 200
    })
})

const userController = {
    getAll,
    create,
    update,
    delete_
}

export default userController