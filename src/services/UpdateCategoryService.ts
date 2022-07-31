import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";
import { CategoryUpdateRequest } from "../types/types";
import { verifyFields } from "../utils/verifyFields.utils";

export class UpdateCategoryService {
    async execute({ id, name, description }: CategoryUpdateRequest): Promise<Category> {
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