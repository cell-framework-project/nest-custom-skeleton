import { Module } from '@nestjs/common';
import { AuthService } from '../infrastructure.service/auth.service';
import { UserHexagonalModule } from 'src/user/module/user.hexagonal.module'
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../strategy/local.strategy';
import { AuthController } from '../controller/auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { databaseProviders } from 'src/database/database.providers';
import { userProviders } from 'src/user/module/user.providers';
import { UserEmailAuthenticator } from 'src/user/application.service/user.email.authenticator';
import { LocalAuthGuard } from '../guard/local.auth.guard';
import { UserEmailFinder } from 'src/user/application.service/user.email.finder';

@Module({
  imports: [
    PassportModule,
    JwtModule.register( {secret: 'mysecretkey'} ),
    DatabaseModule, 
    UserHexagonalModule, 
    PassportModule
  ],
  providers: [
    ...databaseProviders,
    ...userProviders,
    UserEmailAuthenticator,
    UserEmailFinder,
    JwtService,
    AuthService, 
    LocalStrategy,
    LocalAuthGuard,
  ],
  controllers: [AuthController],
  exports: [AuthService,LocalAuthGuard]
})
export class AuthModule {  }
