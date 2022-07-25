import { Injectable, Inject, HttpException } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserEmail } from '../domain.model/user.email';
import { UserName } from '../domain.model/user.name';
import { UserNickname } from '../domain.model/user.nickname';
import { EventPublisher } from '@nestjs/cqrs';
import { UserPassword } from '../domain.model/user.password';

@Injectable()
export class UserCreator {
  
  constructor(
    @Inject('USER_REPOSITORY') private repository: UserRepository, 
    private publisher:EventPublisher
  ) {  }

  async invoque(nickname:UserNickname,email:UserEmail,password:UserPassword,name:UserName):Promise<void>{

    const errors:HttpException[] = await this.repository.checkAvailability(nickname,email);

    if(errors.length>0){
      errors.forEach((error:HttpException) => { throw error; });
      return null;
    }

    else{
      const user = User.create(nickname,email,password,name);
      this.repository.save(user);
      const userEvents = this.publisher.mergeObjectContext(user)
      userEvents.commit();
      return null;
    }

  }

}