import { Request, Response } from 'express';
import { ListVideoService } from '../services/ListVideoService';


export class ListVideoController {
    async handle(request: Request, response: Response) {
        try {
            let service = new ListVideoService();
            return response.send(await service.execute());
        } catch (error) {
            return response.status(400).send(error.message);
        }
    }
}