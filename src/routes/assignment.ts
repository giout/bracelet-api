import { Router } from 'express'
import validate from '../middlewares/validation'
import assignmentController from '../controllers/assignment'
import assignmentSchema from '../schemas/assignment'
import { authentication } from '../middlewares/auth'
import { uuidParam } from '../schemas/generics'

const router = Router()

router.use(authentication)

router.post(
    '/',
    validate('body', assignmentSchema.create),
    assignmentController.create
)

router.delete(
    '/:id',
    validate('id', uuidParam),  
    assignmentController.delete_
)

export default router