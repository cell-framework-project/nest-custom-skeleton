import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable} from '@nestjs/common';
import { UserEmailAuthenticator } from 'src/user/application.service/user.email.authenticator';
import { UserEmail } from 'src/user/domain.model/user.email';
import { UserPassword } from 'src/user/domain.model/user.password';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(protected userEmailAuthenticator:UserEmailAuthenticator ) {
    super();
  }

  async validate(email:string,password:string) {

    return this.userEmailAuthenticator.invoque(
      UserEmail.create(email),
      new UserPassword(password)
    );

  }

}