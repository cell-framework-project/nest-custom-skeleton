import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from '../domain.model/user.repository';
import { UserResult } from './user.result';

@Injectable()
export class UserFinder {
  
  constructor( @Inject('USER_REPOSITORY') private repository:UserRepository ) {}

  async invoque(id:string):Promise<UserResult>{

    return new UserResult(await this.repository.searchById(id));

  }

}