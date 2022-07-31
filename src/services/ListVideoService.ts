import { AppDataSource } from "../db/dataSource";
import { Video } from "../entities/Video";
import { Post, Route, Tags, Body, Response, Request, Get } from "tsoa";

@Route("videos")
@Tags("Listar Videos")
export class ListVideoService{
    
    @Get("")
    @Response<Error>(500, "Erro interno do servidor")
    async execute(): Promise<Video[]>{
        const videoRepository = AppDataSource.getRepository(Video);
        
        let result = await videoRepository.find({relations: ['category']})

        return result;
    }
}