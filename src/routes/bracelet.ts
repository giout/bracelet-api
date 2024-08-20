import { Router } from 'express'

const router = Router()

router.route('/')
    .get()
    .post()

router.delete('/:id')

router.get('/:id/assignment')

export default router
