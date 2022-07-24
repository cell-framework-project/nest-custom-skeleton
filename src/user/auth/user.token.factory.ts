import { JwtService } from "@nestjs/jwt";
import { User } from "../domain.model/user";

export class UserTokenFactory {
  
  constructor(protected jwtService:JwtService){  }

  create(user:User):object{

    const payload:object={
      id:user.getId(),
      nickname:user.getNickname().value,
      email:user.getEmail().value,
      token:this.jwtService.sign({id:user.getId(),nickname:user.getNickname().value,email:user.getEmail().value})
    }

    return payload;

  }

}