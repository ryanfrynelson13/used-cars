import { Body, Controller, Get, Param, Post, Patch, Delete, NotFoundException } from '@nestjs/common';
import { Serialize} from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
@Serialize(UserDto)
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('signup')
    createUser(@Body() body: CreateUserDto){
        return this.usersService.create(body)
    }
    
    @Get(':id')
    async getUser(@Param('id') id: string){
        const user = await this.usersService.findOne(+id)
        if(!user){
            throw new NotFoundException('user not found')
        }

        return user
    }

    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
        const updatedUser = await this.usersService.update(+id, body)
        if(!updatedUser){
            throw new NotFoundException('user to update does not exist')
        }
        return updatedUser
    }

    @Delete(':id')
    removeUser(@Param('id') id: string){
        return this.usersService.remove(+id)
    }
}
