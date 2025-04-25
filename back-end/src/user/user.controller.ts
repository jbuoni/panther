import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../model/user.entity';

@Controller('auth')
export class UserController {
    
    constructor(private serv: UserService) { }


}
