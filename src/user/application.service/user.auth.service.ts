import { Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { JwtService } from "@nestjs/jwt";
import { UserEmail } from "../domain.model/user.email";
import { UserPassword } from "../domain.model/user.password";
import { UserPasswordValidation } from "../domain.model/user.password.validation";
import { UserRepository } from "../domain.model/user.repository";

export class UserAuthService{

  constructor( 
    @Inject('USER_REPOSITORY') protected userRepository:UserRepository,
    protected jwtService:JwtService,
    //protected publisher:EventPublisher
  ){  }

  async invoque(email:UserEmail,password:UserPassword):Promise<any>{

    //validation vias repository
    const validation:UserPasswordValidation = await this.userRepository.validatePasswordByEmail(email,password);

    //validation fails then displays error
    if( !validation.isValid() ){
      throw validation.getErrors()[0];
      return null;
    }

    //validation success then JWT token is creeated
    else{

      const user = await this.userRepository.searchByEmail(email);

      const payload:object={
        id:user.getId(),
        nickname:user.getNickname().value,
        email:user.getEmail().value,
        token:this.jwtService.sign({id:user.getId(),nickname:user.getNickname().value,email:user.getEmail().value},{secret:'secret'})
      }

      //const userEvents = this.publisher.mergeObjectContext(user)
      //userEvents.commit();

      return payload;
  
    }

  }

}