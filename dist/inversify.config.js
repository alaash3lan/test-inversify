"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const types_1 = require("./types/types");
const UserService_1 = require("./services/UserService");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.UserService).to(UserService_1.UserService);
