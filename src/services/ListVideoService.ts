import { AppDataSource } from "../db/dataSource";
import { Video } from "../entities/Video";

export class ListVideoService{
    async execute(): Promise<Video[]>{
        const videoRepository = AppDataSource.getRepository(Video);
        
        let result = await videoRepository.find({relations: ['category']})

        return result;
    }
}