import { Router } from 'express'
import assignment from './assignment'
import auth from './auth'
import bracelet from './bracelet'
import user from './user'

const router = Router()

const routes = [
    {
        path: '/assignment',
        router: assignment
    },
    {
        path: '/auth',
        router: auth
    },
    {
        path: '/bracelet',
        router: bracelet
    },
    {
        path: '/user',
        router: user
    }
]

routes.forEach(route => {
    router.use(route.path, route.router)
})

export default router