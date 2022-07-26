import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserListResult } from './user.list.result';

@Injectable()
export class UserListFinder {
  
  constructor( 
    @Inject('USER_REPOSITORY') private repository: UserRepository 
  ) {  }

  async invoque(): Promise<UserListResult> {
    
    //user entity
    const users:User[] = await this.repository.list();

    //user view model
    return new UserListResult(users);

  }

}