import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly repo: Repository<User>
    ) { }

    public async findOne(username: string): Promise<User> {
        return await this.repo.findOneOrFail({
            where: { name: username }
        });
    }

    public async addUser(userName, email, password): Promise<User> {
        const user = new User();
        user.name = userName;
        user.email = email;
        user.password = password;
        return await this.repo.save(user);
    }

}
