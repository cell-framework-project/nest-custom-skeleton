import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserEmail } from '../domain.model/user.email';
import { UserRepository } from '../domain.model/user.repository';

@Injectable()
export class UserEmailFinder {
  
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository ) {}

  async invoque(email:UserEmail):Promise<User>{

    return this.repository.searchByEmail(email);

  }

}