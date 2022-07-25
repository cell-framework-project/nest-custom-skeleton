import { Module } from '@nestjs/common';
import { UserHexagonalMainController } from '../controller/user.hexagonal.main.controller';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UserHexagonalSignupController } from '../controller/user.hexagonal.signup.controller';
import { UserListFinder } from '../application.service/user.list.finder';
import { UserCreator } from '../application.service/user.creator';
import { UserHexagonalSigninController } from '../controller/user.hexagonal.signin.controller';
import { UserFinder } from '../application.service/user.finder';
import { CqrsModule } from '@nestjs/cqrs';
import { UserAuthService } from '../application.service/user.auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UserCreateCommandHandler } from '../cqrs/command/user.create.command.handler';
import { UserCreatedEventEventHandler } from '../cqrs/event/user.created.event.handler';
import { UserListFindQueryHandler } from '../cqrs/query/user.list.find.query.handler';
import { UserFindQueryHandler } from '../cqrs/query/user.find.query.handler';
import { UserCQRSMainController } from '../controller/user.cqrs.main.controller';
import { UserCQRSSignupController } from '../controller/user.cqrs.signup.controller';

export const CommandHandlers = [UserCreateCommandHandler];
export const EventHandlers = [UserCreatedEventEventHandler];
export const QueryHandlers =[UserListFindQueryHandler,UserFindQueryHandler];

@Module({
  imports:[
    DatabaseModule,
    CqrsModule,
    JwtModule.registerAsync({useFactory: () => {return {signOptions: { expiresIn: '4d' },secret: 'secret'};}})
  ],
  controllers:[
    UserHexagonalMainController,
    UserHexagonalSignupController,
    UserHexagonalSigninController,
    UserCQRSSignupController,
    UserCQRSMainController
  ],
  providers:[
    ...userProviders,
    UserListFinder,
    UserFinder,
    UserCreator,
    UserAuthService,
    ...CommandHandlers, 
    ...EventHandlers,
    ...QueryHandlers
  ]
})
export class UserModule {  }

