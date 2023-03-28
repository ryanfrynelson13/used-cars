import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './User.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) 
        private repo: Repository<User>
    ){}

    findOne(id: number){
        return this.repo.findOne({where: {id}})
    }

    findByEmail(email: string){
        return this.repo.findOne({where: {email}})
    }

    async create(user){
        const newUser = this.repo.create(user)
        return this.repo.save(newUser)
    }

    async update(id: number, attrs: Partial<User>){
        const userToUpdate = await this.findOne(id)
        if(!userToUpdate){
            return 
        }
        Object.assign(userToUpdate, attrs)
        return this.repo.save(userToUpdate)
    }

    async remove(id: number){
        const userToRemove = await this.findOne(id)
        return this.repo.remove(userToRemove)
    }
}
