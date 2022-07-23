import {  Body, Controller, Post,HttpStatus, Request, Res, UseGuards } from '@nestjs/common';
import { UserEmailAuthenticateDto } from 'src/user/dto/user.email.authenticate.dto';
import { AuthService } from '../service/auth.service';
import { Authentication } from '../service/authentication';

HttpStatus

@Controller('auth')
export class AuthController {

  constructor(private readonly authService:AuthService) {}

  @Post('signin')
  signin(@Body() userEmailAuthenticateDto: UserEmailAuthenticateDto){

    return this.authService.authenticate(userEmailAuthenticateDto);

  }

}
