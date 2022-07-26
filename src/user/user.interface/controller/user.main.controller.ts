import { Controller,  Get, Res, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { UserListResult } from '../../application.service/user.list.result';
import { UserListFindQuery } from '../../cqrs/query/user.list.find.query';
import { JwtGuard } from '../middleware/jwt.guard';

@Controller('user')
export class UserMainController {

  //command bus and query bus injected
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus:QueryBus 
  ) {  }

  @UseGuards(JwtGuard)
  @Get()
  index(@Res() res: Response){

    //empty query
    const userListFindQuery = new UserListFindQuery();

    //executes query a gets result
    this.queryBus.execute(userListFindQuery).then(async (users:UserListResult)=>{

      const vm:object = {
        users:users.viewModel 
      };
      
      res.status(HttpStatus.OK).json(vm);
      
    });
    
  }

  @UseGuards(JwtGuard)
  @Get('main')
  get(@Request() req,@Res() res: Response){

    const vm:object = {
      user:req.user.viewModel 
    };
    
    res.status(HttpStatus.OK).json(vm);

  }


}
