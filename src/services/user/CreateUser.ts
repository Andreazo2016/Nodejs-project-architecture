import { IUserRepository } from '../../IRepositories/IUserRepository';
import { User } from '../../models/User';
import { UserCreateDTO } from '../../dtos/UserCreateDTO';


export class CreateUser {

    constructor(
        private IuserRepository: IUserRepository
    ) { }


    async execute(user: UserCreateDTO) {
        this.IuserRepository.create({ name: user.name, email: user.email });
    }

}