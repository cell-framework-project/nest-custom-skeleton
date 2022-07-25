import { Controller,  Get, Res, HttpStatus,Param, UseGuards } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Response } from 'express';
import { UserResult } from '../application.service/user.result';
import { UserFindQuery } from '../cqrs/query/user.find.query';
import { UserListFindQuery } from '../cqrs/query/user.list.find.query';
import { JwtGuard } from '../middleware/jwt.guard';

@Controller('user-cqrs')
export class UserCQRSMainController {

  //command bus and query bus injected
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus:QueryBus 
  ) {  }

  @Get()
  index(@Res() res: Response){

    //new empty query and send it to bus
    const userListFindQuery = new UserListFindQuery();
    this.queryBus.execute(userListFindQuery).then(async (users:UserResult[])=>{ res.status(HttpStatus.OK).json(users); });
  }

  //get single user by UUID
  @Get(':id')
  get(@Param() params, @Res() res: Response){

    //new query and send it to bus
    const userFindQuery = new UserFindQuery(params.id);
    this.queryBus.execute(userFindQuery).then(async (user:UserResult)=>{

      //json render of result view model
      res.status(HttpStatus.OK).json(user);

    });

  }

}
