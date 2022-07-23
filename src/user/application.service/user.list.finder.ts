import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserResult } from './user.result';

UserResult


@Injectable()
export class UserListFinder {
  
  //user domain repository
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository ) {}

  async invoque(): Promise<UserResult[]> {
    
    const users = await this.repository.list();
    const usersResult:UserResult[] = [];

    users.forEach(user =>{
      usersResult.push(new UserResult(user));
    });

    return usersResult;

  }

}