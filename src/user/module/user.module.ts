//Modules
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { CqrsModule } from '@nestjs/cqrs';

//Providers
import { userProviders } from './user.providers';

//Services
import { UserListFinder } from '../application.service/user.list.finder';
import { UserFinder } from '../application.service/user.finder';
import { UserAuthService } from '../application.service/user.auth.service';
import { UserCreator } from '../application.service/user.creator';

//CQRS Handlers
import { UserCreateCommandHandler } from '../cqrs/command/user.create.command.handler';
import { UserCreatedEventEventHandler } from '../cqrs/event/user.created.event.handler';
import { UserListFindQueryHandler } from '../cqrs/query/user.list.find.query.handler';
import { UserFindQueryHandler } from '../cqrs/query/user.find.query.handler';
import { UserLoggedEventEventHandler } from '../cqrs/event/user.logged.event.handler';

//Handlers
import { JwtStrategy } from '../middleware/jwt.strategy';

//Controller
import { UserSignupController } from '../controller/user.signup.controller';
import { UserSigninController } from '../controller/user.signin.controller';
import { UserMainController } from '../controller/user.main.controller';

//Handlers
export const CommandHandlers = [ UserCreateCommandHandler ];
export const EventHandlers = [ UserCreatedEventEventHandler,UserLoggedEventEventHandler ];
export const QueryHandlers =[ UserListFindQueryHandler,UserFindQueryHandler ];

@Module({

  imports:[
    DatabaseModule,
    CqrsModule,
    JwtModule.registerAsync({useFactory: () => {return {signOptions: { expiresIn: '4d' },secret: 'secret'};}})
  ],

  controllers:[
    UserSignupController,
    UserSigninController,
    UserMainController
  ],

  providers:[
    ...userProviders,
    UserListFinder,
    UserFinder,
    UserCreator,
    UserAuthService,
    JwtStrategy,
    ...CommandHandlers, 
    ...EventHandlers,
    ...QueryHandlers
  ]

})
export class UserModule {  }

