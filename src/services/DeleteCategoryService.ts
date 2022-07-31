import { AppDataSource } from "../db/dataSource";
import { Category } from "../entities/Category";



export class DeleteCategorySerivce {
    async execute(id: string) {
        const categoryRepository = AppDataSource.getRepository(Category);
        if(!(await categoryRepository.findBy({id: id}))){
            throw new Error("Category not found");
        }
        await categoryRepository.delete(id)
    }
}