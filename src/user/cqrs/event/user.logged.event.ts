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
        id:user.getId(),
        nickname:user.getNickname().value,
        email:user.getEmail().value,
        name:{
          first:user.getName().first,
          last:user.getName().last
        },
        creationDateTime:user.getCreationDateTime()
      },

      success:success

    }
    
    this.dateTime = new Date();
  }

}