import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { VideoRequest } from "../types/types";
import { Post, Route, Tags, Body, Response, Request, Get } from "tsoa";

@Route("videos")
@Tags("Cadastrar Video")
export class CreateVideoServce {
    @Post("")
    @Response<Error>(500, "Erro interno do servidor")
    @Response<Error>(500, "Video name being used!")
    @Response<Error>(500, "Category Does not exists!")
    async execute(@Body() { name, description, duration, category_id }: VideoRequest) {
        const videoRepository = AppDataSource.getRepository(Video);
        const categoryRepository = AppDataSource.getRepository(Category);
        if ((await videoRepository.findOne({ where: { name: name } }))) {
            throw new Error("Video name being used!");
        }
        if (!(await categoryRepository.find({ where: { id: category_id } }))) {
            throw new Error("Category Does not exists!");
        }
        let video = videoRepository.create({
            name: name,
            description: description,
            duration: duration,
            category_id: category_id
        })
        await videoRepository.save(video);

        return video
    }
}