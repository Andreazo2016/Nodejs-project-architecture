import { IUserRepository } from "../IUserRepository";
import { User } from "../../models/User";

export class PostgresRepository implements IUserRepository{
    create(user:User): Promise<void> {
        console.log('')
    }

}