import { UserEmail } from "../domain.model/user.email";
import { UserPassword } from "../domain.model/user.password";
import { UserPasswordValidation } from "../domain.model/user.password.validation";
import { UserRepository } from "../domain.model/user.repository";
import { UserTokenFactory } from "./user.token.factory";

export class UserAuthService{

  constructor(protected userRepository:UserRepository,protected userTokenFactory:UserTokenFactory ){  }

  async invoque(email:UserEmail,password:UserPassword):Promise<any>{

    const validation:UserPasswordValidation = await this.userRepository.validatePasswordByEmail(email,password);

    if( !validation.isValid() ){
      throw validation.getErrors()[0];
      return null;
    }

    else{

      const user = await this.userRepository.searchByEmail(email);
      const token = this.userTokenFactory.create(user);

      return token;

    }

  }

}