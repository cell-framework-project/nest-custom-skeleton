import { Controller,  Get, Res, HttpStatus,Param } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { UserListResult } from '../application.service/user.list.result';
import { UserResult } from '../application.service/user.result';
import { UserFindQuery } from '../cqrs/query/user.find.query';
import { UserListFindQuery } from '../cqrs/query/user.list.find.query';

@Controller('user-cqrs')
export class UserCQRSMainController {

  //command bus and query bus injected
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus:QueryBus 
  ) {  }

  //get all of users without parameters
  @Get()
  index(@Res() res: Response){

    //new empty query and send it to bus
    const userListFindQuery = new UserListFindQuery();
    this.queryBus.execute(userListFindQuery).then(async (users:UserListResult)=>{

      //json render of result view model
      res.status(HttpStatus.OK).json(users.getViewModel());

    });
  }

  //get single user by UUID
  @Get(':id')
  get(@Param() params, @Res() res: Response){

    //new query and send it to bus
    const userFindQuery = new UserFindQuery(params.id);
    this.queryBus.execute(userFindQuery).then(async (user:UserResult)=>{

      //json render of result view model
      res.status(HttpStatus.OK).json(user.getViewModel());

    });

  }

}
