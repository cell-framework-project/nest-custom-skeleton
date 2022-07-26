import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserFinder } from '../../application.service/user.finder';
import { UserFindQuery } from './user.find.query';

@QueryHandler(UserFindQuery)
export class UserFindQueryHandler implements IQueryHandler<UserFindQuery> {
  constructor(private readonly service: UserFinder) {}

  async execute(query: UserFindQuery) {

    const result = await this.service.invoque(query.id);
    return result;

  }
}