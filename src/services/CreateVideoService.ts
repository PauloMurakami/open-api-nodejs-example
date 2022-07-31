import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";
import { VideoRequest } from "../types/types";

export class CreateVideoServce {
    async execute({ name, description, duration, category_id }: VideoRequest) {
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