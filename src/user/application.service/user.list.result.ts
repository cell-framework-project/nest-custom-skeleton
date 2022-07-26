import { User } from 'src/user/domain.model/user';

export class UserListResult{

  public readonly viewModel:object[];

  constructor(users:User[]){

    const viewModel=[];

    users.forEach((user:User)=>{

      const userViewModel={
        id:user.id,
        nickname:user.nickname.value,
        email:user.email.value,
        name:{
          first:user.name.first,
          last:user.name.last
        },
        creationDateTime:user.creationDateTime
      };

    viewModel.push(userViewModel);

    });
    
    this.viewModel=viewModel;
    
  }

}