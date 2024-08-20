import { Router } from 'express'
import userController from '../controllers/user'
import { authentication } from '../middlewares/auth'

const router = Router()

router.use(authentication)

router.route('/')
    .get(userController.getAll)
    .post(userController.create)

router.route('/:id')
    .put()
    .delete()

export default router
