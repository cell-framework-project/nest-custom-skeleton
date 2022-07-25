import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserResult } from 'src/user/application.service/user.result';
import { UserFinder } from '../../application.service/user.finder';
import { UserFindQuery } from './user.find.query';

@QueryHandler(UserFindQuery)
export class UserFindQueryHandler implements IQueryHandler<UserFindQuery> {
  constructor(private readonly service: UserFinder) {}

  async execute(query: UserFindQuery) {

    const user = await this.service.invoque(query.id);

    const result:UserResult[] = [];

    

    return result;

  }
}