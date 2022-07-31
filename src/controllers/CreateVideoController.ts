import { Request, Response } from 'express';
import { CreateVideoServce } from '../services/CreateVideoService';



export class CreateVideoController {
    async handle(request: Request, response: Response) {
        try {
            let {name, description, duration, category_id} = request.body
            let videoSerivce = new CreateVideoServce()
            let result = await videoSerivce.execute({name, description, duration, category_id})           
            return response.status(200).send(result) 
        } catch (error) {
            return response.status(400).send(error.message)
        }
    }
}