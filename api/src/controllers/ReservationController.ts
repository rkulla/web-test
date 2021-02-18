import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('reservation')
export class ReservationController {
  @Get('')
  private async get(req: Request, res: Response) {
    return res.sendStatus(200)
  }

  @Post('')
  private async post(req: Request, res: Response) {
    console.log('post was hit at least!!!!', req.body)
    return res.sendStatus(200)
  }
}
