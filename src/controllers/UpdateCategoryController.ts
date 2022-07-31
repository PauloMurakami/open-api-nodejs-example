import { Request, Response } from 'express'
import { UpdateCategoryService } from '../services/UpdateCategoryService';


export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        try {
            let { id } = request.params
            let { name, description} = request.body;
            let service = new UpdateCategoryService();
            let result = await service.execute({id, name, description})
            return response.send(result).status(202);
        } catch (error) {
            return response.status(400).send(error.message)
        }
    }
}