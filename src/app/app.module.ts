import { Module } from '@nestjs/common';
import { UtilsModule } from 'src/utils/module/utils.module';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';
import { UserModule } from '../user/module/user.module';

@Module({
  imports: [UserModule,UtilsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
