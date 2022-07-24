import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { UserEmail } from "../../domain.model/user.email";
import { UserHashedPassword } from "../../domain.model/user.hashed.password";
import { UserName } from "../../domain.model/user.name";
import { UserNickname } from "../../domain.model/user.nickname";
import { UserCreateCommand } from './user.create.command';
import { UserCreator } from "../../application.service/user.creator";

@CommandHandler(UserCreateCommand)
export class UserCreateCommandHandler implements ICommandHandler<UserCreateCommand> {
  constructor(
    private service: UserCreator
  ) {}

  async execute(command: UserCreateCommand){

    const nickname = UserNickname.create(command.nickname);
    const email = UserEmail.create(command.email);
    const password =  UserHashedPassword.create(command.password);
    const name = UserName.create(command.firstName,command.lastName);

    this.service.invoque(nickname,email,password,name);

  }

}