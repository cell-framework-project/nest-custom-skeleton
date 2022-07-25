import { Controller, Body, Post, ValidationPipe } from '@nestjs/common';
import { UserCreator } from '../application.service/user.creator';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserEmail } from '../domain.model/user.email';
import { UserPassword } from '../domain.model/user.password';
import { UserName } from '../domain.model/user.name';
import { UserNickname } from '../domain.model/user.nickname';

@Controller('user-hex')
export class UserHexagonalSignupController {
constructor(
  private readonly userCreator: UserCreator
) {  }

  @Post('signup')
  signup(@Body( new ValidationPipe() ) userCreateDto: UserCreateDto){

    //value objects from DTO
    const password =  UserPassword.create(userCreateDto.password);
    const name = UserName.create(userCreateDto.firstName,userCreateDto.lastName);
    const email = UserEmail.create(userCreateDto.email);
    const nickname = UserNickname.create(userCreateDto.nickname);

    //application service with value objects
    return this.userCreator.invoque(nickname,email,password,name);

  }

}
