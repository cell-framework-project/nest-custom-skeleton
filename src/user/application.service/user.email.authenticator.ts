import { Injectable, Inject, Get, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from '../domain.model/user.repository';
import { UserEmail } from '../domain.model/user.email';
import { UserPassword } from '../domain.model/user.password';
import { UserPasswordValidation } from '../domain.model/user.password.validation';

@Injectable()
export class UserEmailAuthenticator {
  
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository) {  }

  async invoque(email:UserEmail,password:UserPassword):Promise<UserPasswordValidation> {

    return  this.repository.validatePasswordByEmail(email,password)

  }

}