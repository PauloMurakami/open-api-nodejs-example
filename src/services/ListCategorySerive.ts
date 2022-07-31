import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { Post, Route, Tags, Body, Response, Request, Get } from "tsoa";

@Route("categories")
@Tags("Listar Categorias")
export class ListCategoryService{

    @Get("")
    @Response<Error>(500, "Erro interno do servidor")
    async execute() : Promise<Category[]>{
        const categoryRepository = AppDataSource.getRepository(Category);
        let result = await categoryRepository.find();
        return result;
    }
}