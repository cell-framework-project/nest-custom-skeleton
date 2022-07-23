import { Module } from '@nestjs/common';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';
import { UserHexagonalModule } from '../user/module/user.hexagonal.module';
import { UserCQRSModule } from 'src/user/module/user.cqrs.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [UserHexagonalModule,UserCQRSModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
