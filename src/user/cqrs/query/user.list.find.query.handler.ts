import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserListResult } from 'src/user/application.service/user.list.result';
import { UserListFinder } from '../../application.service/user.list.finder';
import { UserListFindQuery } from './user.list.find.query';

@QueryHandler(UserListFindQuery)
export class UserListFindQueryHandler implements IQueryHandler<UserListFindQuery> {
  constructor(private readonly service: UserListFinder) {}

  async execute(query: UserListFindQuery) {

    const users = await this.service.invoque();

    return new UserListResult(users);

  }
}