import { UserPasswordValidation } from "src/user/domain.model/user.password.validation";

export class Authentication{

  constructor(public readonly validation:UserPasswordValidation,public readonly payload:object){  }

}