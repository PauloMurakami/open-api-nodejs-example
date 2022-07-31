import { Request, Response } from 'express'
import { ListCategoryService } from '../services/ListCategorySerive'

export class ListCategoryController {

    async handle(request: Request, response: Response) {
        try {
            let service = new ListCategoryService();
            return response.send(await service.execute());
        } catch (error) {
            return response.status(400).send(error.message)
        }
    }
}