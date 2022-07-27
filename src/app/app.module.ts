import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils/module/utils.module';
import { AppController } from 'src/app/user.interface/controller/app.controller';
import { AppService } from './application.service/app.service';
import { UserModule } from '../user/module/user.module';

@Module({
  imports: [UserModule,UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
