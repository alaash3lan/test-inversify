import { Request , Response } from "express";
import { TYPES,IUserService } from "../types/types";
import { inject } from "inversify";
import { controller, httpGet, interfaces } from "inversify-express-utils";


@controller('/users')
export class UserController implements interfaces.Controller {

    constructor(@inject(TYPES.UserService) private userService: IUserService) {}

    @httpGet('/')
    public get(req: Request, res: Response) {
        const user = this.userService.getUSer(1);
        res.send(user);
    }
}