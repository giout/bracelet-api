import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/error";
import braceletService from "../services/bracelet";

const getAll = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const page = Number.isInteger(Number(req.query.page)) ? req.query.page : 1
    const limit = Number.isInteger(Number(req.query.limit)) ? req.query.limit : 10

    const bracelets = await braceletService.getAll(<number> page, <number> limit)

    res.status(200).json({
        message: 'ok',
        code: 200,
        data: bracelets,
        page: Number(page),
        limit: Number(limit)
    })
})

const braceletController = {
    getAll
}

export default braceletController