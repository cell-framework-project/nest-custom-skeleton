import { User } from "../../domain.model/user";
import { uuid4 } from "src/shared/utils/utils";

export class UserLoginFailedEvent{

  public readonly id:string;
  public readonly key:string='user.login.failed'
  public readonly data:object;
  public readonly dateTime:Date;

  constructor(user:User){

    this.id=uuid4();

    this.data={

      user:{
        id:user.id,
        nickname:user.nickname.value,
        email:user.email.value,
        name:{
          first:user.name.first,
          last:user.name.last
        },
        creationDateTime:user.creationDateTime
      },

    }
    
    this.dateTime = new Date();
  }

}