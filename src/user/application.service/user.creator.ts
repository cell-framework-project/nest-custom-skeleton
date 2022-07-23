import { Injectable, Inject } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../../user/domain.model/user.repository';
import { UserEmail } from '../domain.model/user.email';
import { UserName } from '../domain.model/user.name';
import { UserNickname } from '../domain.model/user.nickname';
import { UserHashedPassword } from '../domain.model/user.hashed.password';
import { UserAvailabilityValidation } from '../domain.model/user.availability.validation';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class UserCreator {
  
  constructor(@Inject('USER_REPOSITORY') private repository: UserRepository, private publisher:EventPublisher) {}

  //execute application service
  async invoque(nickname:UserNickname,email:UserEmail,password:UserHashedPassword,name:UserName):Promise<void>{

    this.repository.checkAvailability(nickname,email).then(async(validation:UserAvailabilityValidation)=>{

      //validation fails throws errors
      if(!validation.isValid()){
        validation.getErrors().forEach(error => { throw error; });
      }

      //validation success
      else{

        //save user
        const user = User.create(nickname,email,password,name);
        this.repository.save(user);

        //publish event
        const userEvents = this.publisher.mergeObjectContext(user)
        userEvents.commit();

      }

    });
  
  }

}