import { Router } from 'express'
import braceletController from '../controllers/bracelet'

const router = Router()

router.route('/')
    .get(braceletController.getAll)
    .post()

router.delete('/:id')

router.get('/:id/assignment')

export default router
