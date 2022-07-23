import { Controller,  Get, Res, HttpStatus,Param } from '@nestjs/common';
import { Response } from 'express';
import { UserFinder } from '../application.service/user.finder';
import { UserListFinder } from '../application.service/user.list.finder';

@Controller('user-hex')
export class UserHexagonalMainController {
constructor( private readonly userFinder: UserFinder, private readonly userListFinder:UserListFinder ) {}

  @Get()
  index(@Res() res: Response){
    this.userListFinder.invoque().then(async (users) => {
      res.status(HttpStatus.OK).json(users.getViewModel());
    });
  }

  @Get(':id')
  get(@Param() params, @Res() res: Response){
    this.userFinder.invoque(params.id).then(async (user) => {
      res.status(HttpStatus.OK).json(user.getViewModel());
    });
  }

}
