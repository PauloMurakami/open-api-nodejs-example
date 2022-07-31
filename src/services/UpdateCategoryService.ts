import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { CategoryUpdateRequest } from "../types/types";
import { Put, Route, Tags, Body, Response, Request, Get } from "tsoa";
@Route("categories")
@Tags("Atualizar Categoria")
export class UpdateCategoryService {
    @Put("{id}")
    @Response<Error>(500, "Erro interno do servidor")
    @Response<Error>(400, "Category Does not exists")
    async execute(@Body(){ id, name, description }: CategoryUpdateRequest): Promise<Category> {
        // um breve exemplo de como não ter campos vazios em seu codigo fonte
        // verifyFields([id, name, description]);

        const categoryRepository = AppDataSource.getRepository(Category);
        let category = await categoryRepository.findOne({ where: { id: id } })
        if (!category) {
            throw new Error("Category Does not exists");
        }
        // await categoryRepository.update(category, { name: name, description: description })
        category.name = name ? name : category.name;
        category.description = description ? description : category.description;
        await categoryRepository.save(category)
        return category;
    }
}