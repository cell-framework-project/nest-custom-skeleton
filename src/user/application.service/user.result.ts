import { User } from 'src/user/domain.model/user';

export class UserResult{

  readonly viewModel:object;

  constructor(user:User){

    this.viewModel={
      id:user.id,
      nickname:user.nickname.value,
      email:user.email.value,
      name:{
        first:user.name.first,
        last:user.name.last
      },
      creationDateTime:user.creationDateTime
    }

  }

}