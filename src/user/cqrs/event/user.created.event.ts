import { User } from "../../domain.model/user";
import {v4 as uuid4} from 'uuid';

export class UserCreatedEvent{

  public readonly id:string;
  public readonly key:string='user.created'
  public readonly data:object;
  public readonly dateTime:Date;

  constructor(user:User){

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
      }
    }

    this.dateTime = new Date();
    
  }

}