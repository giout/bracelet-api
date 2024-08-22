import { NextFunction, Request, Response } from "express"
import assignmentService from "../services/assignment"
import { catchAsync } from "../utils/error"
import assignmentHistoryService from "../services/assignmentHistory"

const create = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const bracelet = await assignmentService.create(
        req.body.id_card,
        req.body.bracelet,
        req.body.time
    )

    res.status(201).json({
        message: 'ok',
        code: 201,
        data: bracelet
    })
})

const delete_ = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    await assignmentService.delete_(req.params.id)

    res.status(200).json({
        message: 'ok',
        code: 200
    })
})

const getAll = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const page = Number.isInteger(Number(req.query.page)) ? req.query.page : 1
    const limit = Number.isInteger(Number(req.query.limit)) ? req.query.limit : 10

    const assignments = await assignmentHistoryService.getAll(
        <number> page, 
        <number> limit
    )

    const items = await assignmentHistoryService.getCount()

    res.status(200).json({
        message: 'ok',
        code: 200,
        data: assignments,
        page: Number(page),
        limit: Number(limit),
        items: Number(items)
    })
})

const assignmentController = {
    create,
    delete_,
    getAll
}

export default assignmentController