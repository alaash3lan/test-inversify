import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./inversify.config";
import "./controllers/userController";


const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
  });
  
const app = server.build();
app.listen(3000, () => {
    console.log("Server started on port 3000");
});