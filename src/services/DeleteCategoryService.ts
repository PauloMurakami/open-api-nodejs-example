import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { Post, Route, Tags, Body, Response, Request, Delete } from "tsoa";


@Route("categories")
@Tags("Deletar Categoria")
export class DeleteCategorySerivce {
    @Delete("{id}")
    @Response<Error>(500, "Erro interno do servidor")
    async execute(@Request() id: string) {
        const categoryRepository = AppDataSource.getRepository(Category);
        if(!(await categoryRepository.findBy({id: id}))){
            throw new Error("Category not found");
        }
        await categoryRepository.delete(id)
    }
}