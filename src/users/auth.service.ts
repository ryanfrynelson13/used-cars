import { Injectable } from "@nestjs/common";
import { UsersService } from "./users.service";


@Injectable()
export class AuthService {

    constructor(private usersService: UsersService){}

    login(user){

    }

    signUp(user){
        const alreadyExists = this.usersService.findByEmail(user.email)
        if(alreadyExists){
            return
        }
        
    }

}