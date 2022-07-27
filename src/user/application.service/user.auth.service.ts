import { HttpException, Inject } from "@nestjs/common";
import { EventPublisher } from "@nestjs/cqrs";
import { JwtService } from "@nestjs/jwt";
import { UserEmail } from "../domain.model/user.email";
import { UserPassword } from "../domain.model/user.password";
import { UserRepository } from "../domain.model/user.repository";
import { jwtConstants } from "src/config/jwt.constants";


export class UserAuthService{

  constructor( 
    @Inject('USER_REPOSITORY') protected userRepository:UserRepository,
    protected jwtService:JwtService,
    protected publisher:EventPublisher
  ){  }

  async invoque(email:UserEmail,password:UserPassword):Promise<any>{

    const errors:HttpException[] = await this.userRepository.validatePasswordByEmail(email,password);

    //validation fails then displays error
    if(errors.length>0){
      errors.forEach((error:HttpException) => { throw error; });
      return null;
    }

    //validation success then JWT token is creeated
    else{

      //get user
      const user = await this.userRepository.searchByEmail(email);

      //create payload
      const payload:object={
        id:user.id,
        nickname:user.nickname.value,
        email:user.email.value,
        token:this.jwtService.sign({
          id:user.id,
          nickname:user.nickname.value,
          email:user.email.value
        },{secret:jwtConstants.secretKey})
      };

      //publish domain events
      const userEvents = this.publisher.mergeObjectContext(user)
      userEvents.commit();

      return payload;
  
    }

  }

}