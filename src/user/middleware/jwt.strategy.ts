import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { User } from '../domain.model/user';
import { UserRepository } from '../domain.model/user.repository';
import { UserResult } from '../application.service/user.result';

import { jwtConstants } from 'src/config/jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor( 
    @Inject('USER_REPOSITORY') protected userRepository:UserRepository
  ){  
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secretKey,
    });
  }

  async validate(payload: { id: string }) {

    const user:User = await this.userRepository.searchById(payload.id);

    const userResult = new UserResult(user);

    return userResult;
    
  }
}