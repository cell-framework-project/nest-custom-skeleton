import { Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEmail } from "../domain.model/user.email";
import { UserPassword } from "../domain.model/user.password";
import { UserPasswordValidation } from "../domain.model/user.password.validation";
import { UserRepository } from "../domain.model/user.repository";

export class UserAuthService{

  constructor( @Inject('USER_REPOSITORY') protected userRepository:UserRepository,protected jwtService:JwtService){  }

  async invoque(email:UserEmail,password:UserPassword):Promise<any>{

    const validation:UserPasswordValidation = await this.userRepository.validatePasswordByEmail(email,password);

    if( !validation.isValid() ){
      throw validation.getErrors()[0];
      return null;
    }

    else{

      const user = await this.userRepository.searchByEmail(email);

      console.log(user);

      const payload:object={
        id:user.getId(),
        nickname:user.getNickname().value,
        email:user.getEmail().value,
        token:this.jwtService.sign({id:user.getId(),nickname:user.getNickname().value,email:user.getEmail().value},{secret:'secret'})
      }

      console.log(payload);
  
      return payload;
  
    }

  }

}