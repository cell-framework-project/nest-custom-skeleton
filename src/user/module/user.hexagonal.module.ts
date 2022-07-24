import { Module } from '@nestjs/common';
import { UserHexagonalMainController } from '../controller/user.hexagonal.main.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserHexagonalSignupController } from '../controller/user.hexagonal.signup.controller';
import { UserListFinder } from '../application.service/user.list.finder';
import { UserCreator } from '../application.service/user.creator';
import { UserEmailAuthenticator } from '../application.service/user.email.authenticator';
import { UserHexagonalSigninController } from '../controller/user.hexagonal.signin.controller';
import { UserFinder } from '../application.service/user.finder';
import { CqrsModule } from '@nestjs/cqrs';
import { UserAuthService } from '../application.service/user.auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[
    DatabaseModule,
    CqrsModule,
    JwtModule.registerAsync({useFactory: () => {return {signOptions: { expiresIn: '4d' },secret: 'secret'};}})
  ],
  controllers:[UserHexagonalMainController,UserHexagonalSignupController,UserHexagonalSigninController],
  providers:[...userProviders,UserListFinder,UserFinder,UserCreator,UserEmailAuthenticator,UserAuthService]
})
export class UserHexagonalModule {  }

