import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserResult } from './user.result';

@Injectable()
export class UserListFinder {
  
  constructor( 
    @Inject('USER_REPOSITORY') private repository: UserRepository 
  ) {  }

  async invoque(): Promise<UserResult[]> {
    
    //user entity
    const users:User[] = await this.repository.list();

    //user view model
    const usersResult:UserResult[]=[];

    users.forEach( (user:User) =>{
      usersResult.push( new UserResult(user) );
    });

    return usersResult;

  }

}