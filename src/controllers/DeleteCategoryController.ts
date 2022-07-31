import { Request, Response } from 'express'
import { DeleteCategorySerivce } from '../services/DeleteCategoryService';


export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        try {
            let { id } = request.params
            let service = new DeleteCategorySerivce();
            await service.execute(id)
            return response.send().status(204);
        } catch (error) {
            return response.status(400).send(error.message)
        }
    }
}