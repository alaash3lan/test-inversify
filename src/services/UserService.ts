import { injectable } from "inversify";
import { IUserService } from "../types/types";

@injectable()
export class UserService implements IUserService {
    getUSer(id: number): string {
        return `User ${id}`;
    }
}