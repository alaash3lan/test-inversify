"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const inversify_express_utils_1 = require("inversify-express-utils");
const inversify_config_1 = require("./inversify.config");
require("./controllers/userController");
const server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.container);
server.setConfig((app) => {
    app.use(express_1.default.json());
});
const app = server.build();
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
