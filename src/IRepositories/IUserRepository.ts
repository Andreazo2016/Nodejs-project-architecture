import { User } from "../models/User";

export interface IUserRepository{
    create(user:User):Promise<void>;
}