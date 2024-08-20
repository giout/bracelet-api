import { Router } from 'express'
import authController from '../controllers/auth'
import authSchema from '../schemas/auth'
import validate from '../middlewares/validation'

const router = Router()

router.post(
    '/signup', 
    validate('body', authSchema.signUp), 
    authController.signUp
)

router.post(
    '/login', 
    authController.logIn
)

export default router
