import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { Post, Route, Tags, Body, Response, Request, Get } from "tsoa";
import { CategoryRequest } from "../types/types";

@Route("categories")
@Tags("Criar Categoria")
export class CreateCategoryServce{
    @Post("")
    @Response<Error>(500, "Erro interno do servidor")
    @Response<Error>(400, "Category alredy exists!")
    async execute(@Body() {name, description}:CategoryRequest): Promise<Category | Error>{
        const categoryRepository = AppDataSource.getRepository(Category);

        if(await categoryRepository.findOne({where: {name: name}})){
            throw new Error("Category alredy exists!");
        }

        let category = categoryRepository.create({
            name: name,
            description: description
        });
        await categoryRepository.save(category);
        return category;
    }
}