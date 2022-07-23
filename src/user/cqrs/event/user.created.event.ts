import { User } from "../../domain.model/user";

export class UserCreatedEvent{

  public data:object;

  constructor(user:User){
    this.data={
      id:user.getId(),
      nickname:user.getNickname().value,
      email:user.getEmail().value,
      name:{
        first:user.getName().first,
        last:user.getName().last
      },
      creationDateTime:user.getCreationDateTime().toDateString()
    }
  }

}