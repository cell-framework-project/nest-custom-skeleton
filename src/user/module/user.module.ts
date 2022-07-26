//Env
import { jwtConstants } from 'src/config/jwt.constants';

//Modules
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'src/database/database.module';

//Providers
import { userProviders } from 'src/user/module/user.providers';

//Services
import { UserListFinder } from 'src/user/application.service/user.list.finder';
import { UserFinder } from 'src/user/application.service/user.finder';
import { UserAuthService } from 'src/user/application.service/user.auth.service';
import { UserCreator } from 'src/user/application.service/user.creator';

//CQRS Handlers
import { UserCreateCommandHandler } from 'src/user/cqrs/command/user.create.command.handler';
import { UserCreatedEventEventHandler } from 'src/user/cqrs/event/user.created.event.handler';
import { UserListFindQueryHandler } from 'src/user/cqrs/query/user.list.find.query.handler';
import { UserFindQueryHandler } from 'src/user/cqrs/query/user.find.query.handler';
import { UserLoggedEventEventHandler } from 'src/user/cqrs/event/user.logged.event.handler';

//Middlewares Passport
import { JwtStrategy } from 'src/user/middleware/jwt.strategy';

//Controller
import { UserSignupController } from '../controller/user.signup.controller';
import { UserSigninController } from '../controller/user.signin.controller';
import { UserMainController } from '../controller/user.main.controller';

//Handlers
export const CommandHandlers = [ UserCreateCommandHandler ];
export const EventHandlers = [ UserCreatedEventEventHandler,UserLoggedEventEventHandler ];
export const QueryHandlers =[ UserListFindQueryHandler,UserFindQueryHandler ];

//Module Assembly
@Module({

  imports:[
    DatabaseModule,
    CqrsModule,
    JwtModule.registerAsync({useFactory: () => {return { signOptions: { expiresIn: jwtConstants.expiresIn },secret: jwtConstants.secretKey };}})
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

