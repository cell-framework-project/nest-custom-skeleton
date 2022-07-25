import { Module } from '@nestjs/common';
import { UtilsController } from '../controller/utils.controller';
import { UtilsService } from '../service/utils.service';

@Module({
  providers:[UtilsService],
  controllers:[UtilsController]
})
export class UtilsModule {  }
