import { Controller,  Get, Res, HttpStatus, Body, Post, ValidationPipe } from '@nestjs/common';
import { Response } from 'express';
import { UserCreator } from '../application.service/user.creator';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserEmail } from '../domain.model/user.email';
import { UserHashedPassword } from '../domain.model/user.hashed.password';
import { UserName } from '../domain.model/user.name';
import { UserNickname } from '../domain.model/user.nickname';

@Controller('user-hex')
export class UserHexagonalSignupController {
constructor(private readonly userCreator: UserCreator) {}

  @Post('signup')
  signup(@Res() res: Response, @Body(new ValidationPipe()) userCreateDto: UserCreateDto){

    //value objects from DTO
    const password:UserHashedPassword =  UserHashedPassword.create(userCreateDto.password);
    const name = UserName.create(userCreateDto.firstName,userCreateDto.lastName);
    const email = UserEmail.create(userCreateDto.email);
    const nickname = UserNickname.create(userCreateDto.nickname);

    //application service with value objects
    this.userCreator.invoque(nickname,email,password,name).then(async ()=>{
      res.status(HttpStatus.CREATED).send();
    });

  }

}
