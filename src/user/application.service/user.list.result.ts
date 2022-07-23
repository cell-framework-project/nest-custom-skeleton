import { User } from 'src/user/domain.model/user';

export class UserListResult{

  protected viewModel:object[];

  constructor(users:User[]){
    
    this.viewModel=[];

    users.forEach((user:User) =>{

      const userViewModel={
        id:user.getId(),
        nickname:user.getNickname().getValue(),
        email:user.getEmail().getValue(),
        name:{
          first:user.getName().getFirst(),
          last:user.getName().getLast()
        },
        creationDateTime:user.getCreationDateTime().toDateString()
      };

      this.viewModel.push(userViewModel);

    });

  }

  getViewModel():object[]{
    return this.viewModel;
  }

}