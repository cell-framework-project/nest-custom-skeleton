import { User } from 'src/user/domain.model/user';

export class UserResult{

  readonly id:string;
  readonly nickname:string;
  readonly email:string;
  readonly name:object;
  readonly creationDateTime:string;

  constructor(user:User){

    this.id=user.getId(),

    this.nickname=user.getNickname().value,

    this.email=user.getEmail().value,
    
    this.name={ first:user.getName().first, last:user.getName().last },

    this.creationDateTime=user.getCreationDateTime().toLocaleTimeString()
    
  }

}