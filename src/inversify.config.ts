import { Container } from "inversify";
import { TYPES } from "./types/types";
import { UserService } from "./services/UserService";
import { IUserService } from "./types/types";

const container = new Container();
container.bind<IUserService>(TYPES.UserService).to(UserService);

export { container }