import { DataSource } from "typeorm"
import { CategoryEntity, VideoEntity } from "../entities/index.entities"
import { CreateCategories, CreateVideos } from "./migrations/index.migration"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "postgres",
    migrations: [CreateVideos, CreateCategories],
    entities: [VideoEntity,CategoryEntity]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })