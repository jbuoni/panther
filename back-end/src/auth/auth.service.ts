
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService
) {}

  async signIn(username: string, pass: string): Promise<any> {
    try {
        const user = await this.usersService.findOne(username);
        
        if (user?.password !== pass) {
            throw new UnauthorizedException();  
        }
        const payload = { sub: user.id, username: user.name };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    } catch (e) {
        throw new UnauthorizedException();  
    }
  }

  async signUp(username: string, email: string, pass: string): Promise<any> {
    try {
        const user = await this.usersService.addUser(
            username,
            email,
            pass
        );
        
        const payload = { sub: user.id, username: user.name };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    } catch (e) {
        throw new UnauthorizedException();  
    }
  }
}
