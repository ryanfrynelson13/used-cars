import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('signup')
    createUser(@Body() body: CreateUserDto){
        return this.usersService.create(body)
    }

    @Get(':id')
    getUser(@Param('id') id: string){
        return this.usersService.findOne(id)
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() body: CreateUserDto){
        return this.usersService.update(id, body)
    }

    @Delete(':id')
    removeUser(@Param('id') id: string){
        return this.usersService.remove(id)
    }
}
