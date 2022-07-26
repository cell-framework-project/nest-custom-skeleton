import { Controller,  Get, Res, HttpStatus,Param, UseGuards, Request } from '@nestjs/common';
import { Response } from 'express';
import { UserFinder } from '../application.service/user.finder';
import { UserListFinder } from '../application.service/user.list.finder';
import { UserListResult } from '../application.service/user.list.result';
import { JwtGuard } from '../middleware/jwt.guard';

@Controller('user-hex')
export class UserHexagonalMainController {
constructor( 
  private readonly userFinder: UserFinder, 
  private readonly userListFinder:UserListFinder 
) {  }

  @UseGuards(JwtGuard)
  @Get()
  index(@Res() res: Response){

    this.userListFinder.invoque().then(async (users:UserListResult)=>{
      res.status(HttpStatus.OK).json(users.viewModel);
    });

  }

  @UseGuards(JwtGuard)
  @Get('main')
  get(@Request() req,@Res() res: Response){
    
    res.status(HttpStatus.OK).json(req.user.viewModel);

  }

}
