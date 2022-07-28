import { Controller, Get, Param } from '@nestjs/common';
import { UtilsService } from '../service/utils.service';


@Controller('utils')
export class UtilsController {

  constructor(private utilsService:UtilsService){  }

  @Get('uuid')
  uuid() {
    return this.utilsService.uuidGenerator();
  }

  @Get('random-code/:length')
  randomCode(@Param('length') length: number) {
    return this.utilsService.randomCodeGenerator(length);
  }


  @Get('fixed-length/:int/:length')
  fixedLength(@Param('int') int: number, @Param('length') length: number) {

    console.log(int);

    return this.utilsService.fixedLengthIntegerString(int,length);
  }

  @Get('password-hash/:password')
  passwordHash(@Param('password') password: string) {
    return this.utilsService.passwordHash(password);
  }

}
