import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEmailAuthenticator } from 'src/user/application.service/user.email.authenticator';
import { UserEmailFinder } from 'src/user/application.service/user.email.finder';
import { UserEmail } from 'src/user/domain.model/user.email';
import { UserPassword } from 'src/user/domain.model/user.password';
import { UserEmailAuthenticateDto } from 'src/user/dto/user.email.authenticate.dto';


@Injectable()
export class AuthService{
  
  constructor(
    private userEmailAuthenticator:UserEmailAuthenticator,
    private userEmailFinder:UserEmailFinder,
    private jwtService:JwtService
  ) {  }

  async authenticate(userEmailAuthenticateDto:UserEmailAuthenticateDto): Promise<any> {

    const userEmail = UserEmail.create(userEmailAuthenticateDto.email);
    const userPassword = new UserPassword(userEmailAuthenticateDto.password);

    const validation = await this.userEmailAuthenticator.invoque(userEmail,userPassword);

    if(!validation.isValid()){

      throw new UnauthorizedException;

      return null;
      
    }

    else{

      const user = await this.userEmailFinder.invoque(userEmail);

      const payload = {
        user: user,
        token: this.jwtService.sign(user,{secret:'secret',expiresIn:'46s'})
      };

      return payload;

    }

  }

}