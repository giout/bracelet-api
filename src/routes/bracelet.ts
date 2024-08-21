import { Router } from 'express'
import braceletController from '../controllers/bracelet'
import validate from '../middlewares/validation'
import { integerParam } from '../schemas/generics'
import { authentication } from '../middlewares/auth'

const router = Router()

router.use(authentication)

router.route('/')
    .get(braceletController.getAll)
    .post(braceletController.create)

router.delete(
    '/:id',
    validate('id', integerParam),
    braceletController.delete_
)

router.get('/:id/assignment')

export default router
