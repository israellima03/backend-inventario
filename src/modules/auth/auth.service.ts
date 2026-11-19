import { Injectable } from '@nestjs/common';

import { User } from '../admin/users/entities/user.entity';
import { UsersService } from '../admin/users/users.service';

@Injectable()
export class AuthService {
    //creamos el constructeor que es lo primero
    constructor (private userService: UsersService){
        
    }

    //async login(credenciales){
        
   // }
}
