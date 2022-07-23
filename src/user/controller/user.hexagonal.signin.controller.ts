import { Controller, Res, HttpStatus, Body, Post } from '@nestjs/common';
import { Response } from 'express';
import { UserEmailAuthenticator } from '../application.service/user.email.authenticator';
import { UserEmailAuthenticateDto } from '../dto/user.email.authenticate.dto';
import { UserEmail } from '../domain.model/user.email';
import { UserPassword } from '../domain.model/user.password';

@Controller('user-hex')
export class UserHexagonalSigninController {
constructor(private readonly userEmailAuthenticator: UserEmailAuthenticator) {}

  //
  @Post('signin')
  signin(@Res() res: Response, @Body() userAuthDto: UserEmailAuthenticateDto){

    //value objects from dto
    const email:UserEmail = UserEmail.create(userAuthDto.email);
    const password:UserPassword = new UserPassword(userAuthDto.password);

    //application service
    this.userEmailAuthenticator.invoque(email,password).then( async (user) => {

      console.log(user);
      res.status(HttpStatus.ACCEPTED).send();
      
    });

  }

}