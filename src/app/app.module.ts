import { Module } from '@nestjs/common';
import { AppController } from '../app/app.controller';
import { AppService } from '../app/app.service';
import { UserHexagonalModule } from '../user/module/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {  }
