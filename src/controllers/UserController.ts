import { Request, Response } from 'express';
import { PostgresRepository } from '../IRepositories/implementations/PostgresRepository';
import { CreateUser } from '../services/user/CreateUser';

class UserController {

    private createUserService: CreateUser;

    constructor() {
        this.createUserService = new CreateUser(new PostgresRepository())
    }

    async createUser(request: Request, response: Response) {
        const { name, email } = request.body;
        this.createUserService.execute({ name, email });
    }

}

const userController = new UserController();
export { userController }