import "reflect-metadata";
import express from "express";
import "./db/dataSource"
import cors from 'cors';
import { routes } from "./routes";
import swaggerUi from 'swagger-ui-express';

let port = 3333;

const app = express();

const allowedOrigins = ['http://localhost:4200'];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(express.json())
app.use(express.static("dist/public"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  }));
app.use(cors(options));
app.use(routes)

app.listen(port, () => {
  console.log("Server is running: " + port);
}) 