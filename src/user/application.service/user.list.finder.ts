import { Injectable, Inject, Get } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';

@Injectable()
export class UserListFinder {
  
  constructor( @Inject('USER_REPOSITORY') private repository: UserRepository ) {}

  async invoque(): Promise<User[]> {
    
    return this.repository.list();

  }

}