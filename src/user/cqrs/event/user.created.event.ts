import { User } from "../../domain.model/user";

export class UserCreatedEvent{

  public data:object;

  constructor(user:User){
    this.data={
      id:user.getId(),
      nickname:user.getNickname().getValue(),
      email:user.getEmail().getValue(),
      name:{
        first:user.getName().getFirst(),
        last:user.getName().getLast()
      },
      creationDateTime:user.getCreationDateTime().toDateString()
    }
  }

}