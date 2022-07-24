import { Module } from '@nestjs/common';
import { UserCQRSModule } from 'src/user/module/user.cqrs.module';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';
import { UserHexagonalModule } from '../user/module/user.hexagonal.module';

@Module({
  imports: [UserHexagonalModule,UserCQRSModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
