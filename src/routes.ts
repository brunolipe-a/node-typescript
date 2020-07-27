import { Router } from 'express'

import UserController from '@controllers/UserController'

const routes = Router()

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'API ok!' })
})

routes.get('/users', UserController.index)

export default routes
