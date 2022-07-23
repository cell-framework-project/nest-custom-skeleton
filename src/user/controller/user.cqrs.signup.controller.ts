import { Controller, Res, Body, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserCreateDto } from '../../user/dto/user.create.dto';
import { UserCreateCommand } from '../cqrs/command/user.create.command';

@Controller('user-cqrs')
export class UserCQRSSignupController {

constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus:QueryBus 
  ) {  }

  @Post('signup')
  signup(@Body() userCreateDto: UserCreateDto){

    // command created from valid DTO
    const userCreateCommand = new UserCreateCommand(
      userCreateDto.nickname,
      userCreateDto.email,
      userCreateDto.password,
      userCreateDto.firstName,
      userCreateDto.lastName
    );

    //exacute command with response
    return this.commandBus.execute(userCreateCommand);
    
  }

}
