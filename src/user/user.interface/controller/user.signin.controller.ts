import { Controller, Body, Post, ValidationPipe } from '@nestjs/common';
import { UserEmailAuthenticateDto } from '../dto/user.email.authenticate.dto';
import { UserEmail } from '../../domain.model/user.email';
import { UserPassword } from '../../domain.model/user.password';
import { UserAuthService } from '../../application.service/user.auth.service';


@Controller('user')
export class UserSigninController {
constructor( 
  private readonly userAuthService:UserAuthService 
) {  }

  @Post('signin')
  signin(@Body( new ValidationPipe() ) userAuthDto: UserEmailAuthenticateDto){

    //value objects
    const email:UserEmail = UserEmail.create(userAuthDto.email);
    const password:UserPassword = new UserPassword(userAuthDto.password);

    //auth service
    return this.userAuthService.invoque(email,password);

  }

}