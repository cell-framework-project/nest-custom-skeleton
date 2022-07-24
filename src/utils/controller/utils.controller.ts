import { Controller, Get, Param } from '@nestjs/common';
import { UtilsService } from '../service/utils.service';


@Controller('utils')
export class UtilsController {

  constructor(private utilsService:UtilsService){  }

  @Get('uuid')
  uuid() {
    return this.utilsService.uuidGenerator();
  }

}
