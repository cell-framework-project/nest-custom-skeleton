import { Controller, Res, Body, Post, ValidationPipe } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UserCreateDto } from '../dto/user.create.dto';
import { UserCreateCommand } from '../../cqrs/command/user.create.command';

@Controller('user')
export class UserSignupController {

constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus:QueryBus 
  ) {  }

  @Post('signup')
  signup(@Body( new ValidationPipe() ) userCreateDto: UserCreateDto){

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
