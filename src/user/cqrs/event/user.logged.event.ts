import { User } from "../../domain.model/user";
import {v4 as uuid4} from 'uuid';

export class UserLoggedEvent{

  public readonly id:string;
  public readonly key:string='user.logged'
  public readonly data:object;
  public readonly dateTime:Date;

  constructor(user:User,success:boolean){

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

      success:success

    }
    
    this.dateTime = new Date();
  }

}