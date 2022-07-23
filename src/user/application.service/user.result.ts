import { User } from 'src/user/domain.model/user';

export class UserResult{

  protected viewModel:object;

  constructor(user:User){
    this.viewModel={
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

  getViewModel():object{
    return this.viewModel;
  }

}