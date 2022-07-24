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
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserTokenFactory } from '../auth/user.token.factory';
import { UserAuthService } from '../auth/user.auth.service';

@Module({
  imports:[DatabaseModule,CqrsModule,JwtModule],
  controllers:[UserHexagonalMainController,UserHexagonalSignupController,UserHexagonalSigninController],
  providers:[...userProviders,UserListFinder,UserFinder,UserCreator,UserEmailAuthenticator,JwtService,UserTokenFactory,UserAuthService]
})
export class UserHexagonalModule {  }
