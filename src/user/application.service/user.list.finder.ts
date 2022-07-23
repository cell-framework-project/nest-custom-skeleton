import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserListResult } from './user.list.result';


@Injectable()
export class UserListFinder {
  
  //user domain repository
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository ) {}

  async invoque(): Promise<UserListResult> {
    return new UserListResult(await this.repository.list());
  }

}