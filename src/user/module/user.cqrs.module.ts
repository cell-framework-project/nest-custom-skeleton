import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from 'src/database/database.module';
import { UserCreator } from 'src/user/application.service/user.creator';
import { UserFinder } from '../application.service/user.finder';
import { UserListFinder } from '../application.service/user.list.finder';
import { UserCQRSMainController } from '../controller/user.cqrs.main.controller';
import { UserCQRSSignupController } from '../controller/user.cqrs.signup.controller';
import { UserCreateCommandHandler } from '../cqrs/command/user.create.command.handler';
import { UserCreatedEventEventHandler } from '../cqrs/event/user.created.event.handler';
import { UserFindQueryHandler } from '../cqrs/query/user.find.query.handler';
import { UserListFindQueryHandler } from '../cqrs/query/user.list.find.query.handler';
import { userProviders } from './user.providers';

export const CommandHandlers = [UserCreateCommandHandler];
export const EventHandlers = [UserCreatedEventEventHandler];
export const QueryHandlers =[UserListFindQueryHandler,UserFindQueryHandler];

@Module({
  imports:[
    CqrsModule,
    DatabaseModule
  ],
  controllers:[
    UserCQRSSignupController,
    UserCQRSMainController
  ],
  providers:[
    ...userProviders, 
    UserCreator,
    UserFinder,
    UserListFinder, 
    ...CommandHandlers, 
    ...EventHandlers,
    ...QueryHandlers
  ]
})
export class UserCQRSModule {  }
