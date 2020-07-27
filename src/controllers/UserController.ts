import { Request, Response } from 'express'

class UserController {
  async index(request: Request, response: Response) {
    response.json({ message: 'users' })
  }
}

export default new UserController()
