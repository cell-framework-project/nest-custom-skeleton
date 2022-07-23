import { Injectable, Inject } from '@nestjs/common';
import { UserEmail } from '../domain.model/user.email';
import { UserRepository } from '../domain.model/user.repository';
import { UserResult } from './user.result';

@Injectable()
export class UserEmailFinder {
  
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository ) {}

  async invoque(email:UserEmail):Promise<UserResult>{

    return new UserResult(await this.repository.searchByEmail(email));

  }

}