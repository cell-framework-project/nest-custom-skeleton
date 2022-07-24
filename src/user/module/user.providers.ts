import { JwtService } from '@nestjs/jwt';
import { DataSource } from 'typeorm';
import { UserTokenFactory } from '../auth/user.token.factory';
import { User } from '../domain.model/user';
import { UserRepository } from '../domain.model/user.repository';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => new UserRepository(dataSource.getRepository(User)),
    inject: ['DATA_SOURCE'],
  }
];