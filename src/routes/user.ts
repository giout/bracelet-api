import { Router } from 'express'
import userController from '../controllers/user'
import { authentication } from '../middlewares/auth'
import validate from '../middlewares/validation'
import userSchema from '../schemas/user'
import { uuidParam } from '../schemas/generics'

const router = Router()

router.use(authentication)

router.route('/')
    .get(userController.getAll)
    .post(
        validate('body', userSchema.createUser),
        userController.create
    )

router.route('/:id')
    .put(
        validate('id', uuidParam),
        validate('body', userSchema.updateUser),
        userController.update
    )
    .delete(
        validate('id', uuidParam),
        userController.delete_
    )

export default router
