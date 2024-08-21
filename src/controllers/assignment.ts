import { NextFunction, Request, Response } from "express"
import assignmentService from "../services/assignment"
import { catchAsync } from "../utils/error"

const create = catchAsync( async (req: Request, res: Response, next: NextFunction) => {
    const bracelet = await assignmentService.create(
        req.body.user,
        req.body.bracelet,
        req.body.time
    )

    res.status(201).json({
        message: 'ok',
        code: 201,
        data: bracelet
    })
})

const assignmentController = {
    create
}

export default assignmentController