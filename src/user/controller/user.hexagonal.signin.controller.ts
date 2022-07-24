import { Controller, Res,  Body, Post } from '@nestjs/common';
import { Response } from 'express';
import { UserEmailAuthenticateDto } from '../dto/user.email.authenticate.dto';
import { UserEmail } from '../domain.model/user.email';
import { UserPassword } from '../domain.model/user.password';
import { UserAuthService } from '../auth/user.auth.service';

@Controller('user-hex')
export class UserHexagonalSigninController {
constructor(private readonly userAuthService:UserAuthService) {}

  @Post('signin')
  signin(@Body() userAuthDto: UserEmailAuthenticateDto){

    const email:UserEmail = UserEmail.create(userAuthDto.email);
    const password:UserPassword = new UserPassword(userAuthDto.password);

    return this.userAuthService.invoque(email,password);

  }

}