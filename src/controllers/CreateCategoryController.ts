import { Request,Response } from 'express';
import { CreateCategoryServce } from '../services/CreateCategoryService';


export class CreateCategoryController {
    async handle(request: Request, response: Response){
        try {
            let {name, description}  = request.body
            let categoryService = new CreateCategoryServce();
            let result = await categoryService.execute({name, description})
            return response.send(result)
        } catch (error) {
            return response.status(400).send(error.message)
        }
         
    }
}